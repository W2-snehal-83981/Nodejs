// const {insert} = require('../repos/user-repo');
//const {insert} = require('../repos/user-repo')
const pool = require('../pool');

class UserRepo{
    static async find(){
        const {rows} = await pool.query('select * from users;');
        console.log(rows);
        return rows;
    }

    static async findById(id){
        const {rows} = await pool.query('select username,age from users where id = $1',[id]);

        return rows[0];
    }

    static async insert(username,age){
        const {rows} = await pool.query('insert into users (username,age) values ($1,$2) returning *;',[username,age]);
        return rows[0];
    }

    static async update(id, usename, age){
        const { rows } = await pool.query(
            'UPDATE users SET username = $1, age = $2 WHERE id = $3',
            [usename, age, id]
        );
        return rows[0];
    }


    static async delete(id){
        const {rows} = await pool.query(
            'delete from users where id=$1;',[id]
        );
        return rows[0];
    }

}

module.exports = UserRepo;