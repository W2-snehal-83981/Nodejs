const express = require('express');
const UserRepo = require('../repos/user-repo');
const TaskRepo = require('../repos/tasks-repo');

const router = express.Router();

//Users
router.get('/users',async (req,res) => {
    const users = await UserRepo.find();
    console.log(users);
    res.send(users);
});

router.get('/users/:id',async (req,res) => {
    const {id} = req.params;
    const user = await UserRepo.findById(id);

    if(user){
        res.send(user);
    }
    else{
        res.sendStatus(404);
    }
});

router.post('/users',async (req,res) =>{
    // console.log(req.body);

    const {username, age} = req.body;
    const user = await UserRepo.insert(username,age);
    res.send(user);
});

router.put('/users/:id',async (req,res) => {
    const { id } = req.params;
    const { username, age } = req.body;

    const user = await UserRepo.update(id, username, age);
    if(user){
        res.send(user);
    }
    else{
        res.sendStatus(404);
    }
});

router.delete('/users/:id', async (req,res) => {
    const {id} = req.params;
    const user = await UserRepo.delete(id);
    if(user){
        res.send(user);
    }
    else{
        res.sendStatus(404);
    }
});



//Tasks
router.get('/tasks',async (req,res)=>{
    const tasks = await TaskRepo.find();
    console.log(tasks);
    res.send(tasks);
});

router.get('/tasks/:id', async (req,res)=>{
    const {id} = req.params;
    const task = await TaskRepo.findById(id);
    console.log(task);

    if(task){
        res.send(task);
    }
    else{
        res.sendStatus(404);
    }
});

router.post('/tasks',async (req,res)=>{
    const {description,completed} = req.body;
    const task = await TaskRepo.insert(description,completed);
    res.send(task);
});

router.put('/tasks/:id',async (req,res) => {
    const { id } = req.params;
    const { description, completed } = req.body;

    const task = await UserRepo.update(id, description, completed);
    if(task){
        res.send(task);
    }
    else{
        res.sendStatus(404);
    }
});

router.delete('/tasks/:id', async (req,res) => {
    const {id} = req.params;
    const task = await UserRepo.delete(id);
    if(task){
        res.send(task);
    }
    else{
        res.sendStatus(404);
    }
});


module.exports = router;
