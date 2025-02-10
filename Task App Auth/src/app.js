const express = require('express');
const usersRouter = require('./routes/users');
// const jwt = require('jsonwebtoken');
// const app = express.Router();
// const pool = require('./pool')
// const bcrypt = require('bcryptjs');

// app.use(express.json());
// app.use(usersRouter);

// app.post("/signin",(request,response)=>{
//     console.log("credentials received from client: ");
//     console.log(request.body.username);
//     console.log(request.body.password);
//     var isUserValid = checkCredentialsInDatabase(request.body.username, request.body.password)

//     if(isUserValid){
//         var someRandomNumber = Math.floor(Math.random()*10000)

//         var payload = {
//             UserName: request.body.username,
//             randomNo:someRandomNumber,
//             tokenCreatedAt: new Date().toString()
//         };

//         var secretKey = "Sunbeaminfo.com"
//         var token = jwt.sign(payload,secretKey);

//         var outputToBeSent = {jwtoken: token,message:"success"};

//        //send token to the client
//        response.setHeader("content-type","application/json");
//        response.write(JSON.stringify(outputToBeSent));
//        response.end();
//     }
//     else{
//         var outputToBeSent = {message:"failure"};
//         response.setHeader("content-type","application/json");
//         response.write(JSON.stringify(outputToBeSent));
//         response.end();
//     }
// })

// function checkCredentialsInDatabase(username,password){
//     return new Promise((resolve,reject)=>{
//         pool.execute('select * from users where username= ?',[username],(err,results)=>{
//             if(err){
//                 reject('Database error');
//                 return;
//             }

//             if(results.length === 0){
//                 reject('Username not found');
//                 return;
//             }

//             const user = results[0];
//             bcrypt.compare(password,user.password, (err,isMatch) =>{
//                 if(err){
//                     reject('Error comparing passwords');
//                 }
//                 if(isMatch){
//                     resolve(true);
//                 }else{
//                     reject('Incorrect password');
//                 }
//             });
//         });
//     });
// }



module.exports = ()=>{
    const app = express();

    app.use(express.json());

    app.use(usersRouter);
    
    return app;
};