//& mongoose is destrucered with the connect bcoz here we going to connect it with mongod
const {connect} = require('mongoose');

//& We have stored the url in the .env so the below module we need to import 
 require('dotenv').config();

//! Inside connect method it accepts URL and it is the promise 

connect(process.env.G_URL).
then(()=>{
    console.log("Mongodb connected successfully");
}).
catch((error)=>{console.log(error);})

//! Note here we are not exporting any thing bcoz we not stored it any variable but it can be accessed any where without any problem