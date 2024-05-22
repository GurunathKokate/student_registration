//& express module is imported to create the application middleware 
const express = require('express');
//& Dotenv is imported to access the things written in the .env
require('dotenv').config();
//& This below file is imported to acces the error handling middleware into this file 
const { PageNotFound, ErrorHandling }= require('./middleware/error.handling');

//& We need to call the connectionDB to start the mongodb connection 
require('./config/connectionDB');

//& All the address are saved in the router so we need import the router 
const studentRouter = require('./router/student.routes');


//! This is the application level middlware 
let app = express();


//! This is used to get the data from the front end in the form of json format 
app.use(express.json())


//! Here i have written the base url for our project 
app.use("/api/student",studentRouter)

//^ Here error handling middlewares are called from the middleware folder

app.use(PageNotFound)

app.use(ErrorHandling)

//* here we got the port number with the help of dotenv
let port = process.env.PORT

//~ This is used to connect to our server 
app.listen(port, ()=>{

    console.log(`Server running successfully on port no. ${port}`);
})