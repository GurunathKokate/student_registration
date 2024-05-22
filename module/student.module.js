const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

let studentSchema = new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        require:true
    },
    mobile:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    otp:{
        type:String,
        default:"null"
    }
},{timestamps:true})

//! This is code to bcrypt the password here we are making use of the bcryptjs 
//* PRE method accepts 2 arrgument in which the second argument must not be arrow function

studentSchema.pre("save", async function(password){

    let salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password,salt)
 //^ Above version 5 there is no need of giving the next() method 
})

studentSchema.methods.CompareMyPass = async function(pass){
    return await bcryptjs.compare(pass,this.password)
}

module.exports = new mongoose.model("student",studentSchema)