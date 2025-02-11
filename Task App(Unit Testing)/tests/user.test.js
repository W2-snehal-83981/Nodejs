// const request = require('supertest');
// const app = require('../src/app')
// const User = require('../src/routes/users')

// const userOne = {
//     name: 'mike',
//     age:30
// }

// beforeEach(async ()=>{
//    await User.deleteMany(); //before start it start with empty database
//    await new User(userOne).save()
//     console.log('beforeEach')
// })


// test('Should signup a new user',async ()=>{
//     //await request(app).post('/users').send({
//     await request(router).post('/users').send({
//     username: 'cookie123',
//     age:40
//     }).expect(201)
// })

// test('Should login existing user',async ()=>{
//     await request(app).post('/users/login').send({
//     username: userOne.username,
//     age:userOne.age
//     }).expect(200)
// })

// test('Should not login nonexisting user',async ()=>{
//     await request(app).post('/users/login').send({
//     username: userOne.username,
//     age: 30
//     }).expect(400)
// })

// test('Should get user',async ()=>{
//     await request(app).get('/users').send().expect(200)
// })

// // test('Should get user',async ()=>{
// //     await request(app)
// //     .get('/users')
// //     .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
// //     .send()
// //     .expect(200)
// // })

// test('Should delete user',async ()=>{
//     await request(app).delete('/users/:id').send().expect(200)
// })

const request = require('supertest');
const express = require('express');
const router = require('../src/routes/users')
const UserRepo = require('../src/repos/user-repo');
const TaskRepo = require('../src/repos/tasks-repo');

// Set up a test Express app with the routes
const app = express();
app.use(express.json());
app.use(router);

jest.mock('../src/repos/user-repo');
jest.mock('../src/repos/tasks-repo');

describe('API tests', () => {

  // Test for users endpoint
  describe('GET /users', () => {
    it('should return all users', async () => {
      const mockUsers = [{ id: 1, username: 'John', age: 30 }];
      UserRepo.find.mockResolvedValue(mockUsers);

      const res = await request(app).get('/users');
      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockUsers);
    });
  });

  describe('GET /users/:id', () => {
    it('should return a user by id', async () => {
      const mockUser = { id: 1, username: 'John', age: 30 };
      UserRepo.findById.mockResolvedValue(mockUser);

      const res = await request(app).get('/users/1');
      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockUser);
    });

    it('should return 404 if user not found', async () => {
      UserRepo.findById.mockResolvedValue(null);

      const res = await request(app).get('/users/999');
      expect(res.status).toBe(404);
    });
  });

  describe('POST /users', () => {
    it('should create a new user', async () => {
      const mockUser = { id: 1, username: 'John', age: 30 };
      UserRepo.insert.mockResolvedValue(mockUser);

      const res = await request(app).post('/users').send({ username: 'John', age: 30 });
      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockUser);
    });
  });

  describe('PUT /users/:id', () => {
    it('should update an existing user', async () => {
      const mockUser = { id: 1, username: 'John', age: 31 };
      UserRepo.update.mockResolvedValue(mockUser);

      const res = await request(app).put('/users/1').send({ username: 'John', age: 31 });
      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockUser);
    });

    it('should return 404 if user not found', async () => {
      UserRepo.update.mockResolvedValue(null);

      const res = await request(app).put('/users/999').send({ username: 'Nonexistent', age: 25 });
      expect(res.status).toBe(404);
    });
  });

  describe('DELETE /users/:id', () => {
    it('should delete a user', async () => {
      const mockUser = { id: 1, username: 'John', age: 30 };
      UserRepo.delete.mockResolvedValue(mockUser);

      const res = await request(app).delete('/users/1');
      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockUser);
    });

    it('should return 404 if user not found', async () => {
      UserRepo.delete.mockResolvedValue(null);

      const res = await request(app).delete('/users/999');
      expect(res.status).toBe(404);
    });
  });

  // Test for tasks endpoint
  describe('GET /tasks', () => {
    it('should return all tasks', async () => {
      const mockTasks = [{ id: 1, description: 'Task 1', completed: false }];
      TaskRepo.find.mockResolvedValue(mockTasks);

      const res = await request(app).get('/tasks');
      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockTasks);
    });
  });

  describe('GET /tasks/:id', () => {
    it('should return a task by id', async () => {
      const mockTask = { id: 1, description: 'Task 1', completed: false };
      TaskRepo.findById.mockResolvedValue(mockTask);

      const res = await request(app).get('/tasks/1');
      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockTask);
    });

    it('should return 404 if task not found', async () => {
      TaskRepo.findById.mockResolvedValue(null);

      const res = await request(app).get('/tasks/999');
      expect(res.status).toBe(404);
    });
  });

  describe('POST /tasks', () => {
    it('should create a new task', async () => {
      const mockTask = { id: 1, description: 'Task 1', completed: false };
      TaskRepo.insert.mockResolvedValue(mockTask);

      const res = await request(app).post('/tasks').send({ description: 'Task 1', completed: false });
      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockTask);
    });
  });

  describe('PUT /tasks/:id', () => {
    it('should update an existing task', async () => {
      const mockTask = { id: 1, description: 'Updated Task', completed: true };
      TaskRepo.update.mockResolvedValue(mockTask);

      const res = await request(app).put('/tasks/1').send({ description: 'Updated Task', completed: true });
      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockTask);
    });

    it('should return 404 if task not found', async () => {
      TaskRepo.update.mockResolvedValue(null);

      const res = await request(app).put('/tasks/999').send({ description: 'Nonexistent Task', completed: false });
      expect(res.status).toBe(404);
    });
  });

  describe('DELETE /tasks/:id', () => {
    it('should delete a task', async () => {
      const mockTask = { id: 1, description: 'Task 1', completed: false };
      TaskRepo.delete.mockResolvedValue(mockTask);

      const res = await request(app).delete('/tasks/1');
      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockTask);
    });

    it('should return 404 if task not found', async () => {
      TaskRepo.delete.mockResolvedValue(null);

      const res = await request(app).delete('/tasks/999');
      expect(res.status).toBe(404);
    });
  });

});


