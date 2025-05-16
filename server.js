// function add(a,b){
//     return a+b;

// }

// var result = add(7,23);
// console.log(result);

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt','Hi' +user.username +'!\n' , ()=>{
//     console.log("File is created bro")
// }   );

// console.log(os);
// console.log(fs);

// const notes = require("./notes.js");
// var age = notes.age;
// var result = notes.addNumber(age+2,8);



// console.log(age);
// console.log(notes.name);
// console.log(result);


// var _ = require('lodash');

// var data = ["persona","person",1,2,1,2,3,4,4,'name','2','age'];
// var filter = _.uniq(data);
// console.log(filter);


//console.log(_.isString(true));

// app.get('/chicken',(req,res)=>{
//     res.send('sure sir , we would like and love to serve chicken to you')
// })

// app.get('/idli',function(req,res){
//     var customized_idli = {
//         name : 'Special idli',
//         size : '10cm in diameter',
//         is_sambhar : true,
//         is_chutney : false
//     }
//     res.send('customized_idli')
// }




const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send('Welcome to you bro in my hotel ... how i can help you ?.. We have a list of menus')
})



const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);



app.listen(3000, ()=>{
    console.log("Server is live bro , Listening on port 3000")
})
