const mongoose = require('mongoose');

// 1. Defining the mongodb connection url
const mongouURL= 'mongodb://localhost:27017/hotels'

// 2.Setting up mongodb connection

mongoose.connect(mongouURL,{
    //useNewUrlParser: true,
   // useUnifiedTopology: true
})

// 3.Get the default connection
// mongoose maintains a default connection object representing the mongodb connection

const db = mongoose.connection

//4. Event listener

db.on('connected',()=>{
    console.log('Connected to Mongodb Server');
});


db.on('error',(err)=>{
    console.log('Mongodb connection error:',err);
});

db.on('disconnected',()=>{
    console.log('Disonnected to Mongodb Server');
});


// Export the db

module.exports=db;