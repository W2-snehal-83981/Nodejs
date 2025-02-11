const pool = require('../pool');
// const {insert} = require('../repos/user-repo');
// const {insert} = require('../repos/tasks-repo');

class TaskRepo{
    static async find(){
        const {rows} = await pool.query('select * from tasks;');
        console.log(rows);
        return rows; 
    }

    static async insert(description,completed){
        const {rows} = await pool.query('insert into tasks (description,completed) values ($1,$2) returning *;',[description,completed]);
        return rows[0];
    }

    static async findById(id){
        const {rows} = await pool.query('select description,completed from tasks where id=$1',[id]);
        return rows[0];
    }

     static async update(id, description,completed){
            const { rows } = await pool.query(
                'UPDATE tasks SET description = $1, completed = $2 WHERE id = $3',
                [description, completed, id]
            );
            return rows[0];
        }
    
    
        static async delete(id){
            const {rows} = await pool.query(
                'delete from tasks where id=$1;',[id]
            );
            return rows[0];
        }
}

module.exports = TaskRepo;