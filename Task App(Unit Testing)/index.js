const app = require('./src/app.js')
const pool = require('./src/pool.js')

pool.connect({
    host:'localhost',
    port: 5432,
    database:'TaskApp1',
    user:'postgres',
    password:'password'
})
.then(()=>{
    app().listen(3005,()=>{
        console.log('Server Running on port 3005!');
    })
})
.catch((err)=>console.log(err))
