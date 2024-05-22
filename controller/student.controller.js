//& joi module for joi validation it can be considered as second level validation
const valstudent = require('../JoiValidation/student.joi');

const student = require('../module/student.module');

const {invitationMail} = require('../helper/student.nodemailer');

const {studentOtp} = require('../helper/otpHelper');

let createStudent = async (req,res,next)=>{

    let {name,email,age,mobile,password} = req.body

    let isAvailable = await student.findOne({email});

    if(isAvailable)
    {
        res.status(400).json({error:true, message:`The user with ${email} email id is already present`})
    }

    let {value,error} = valstudent.validate(req.body)

    let newStudent = await student.create(value)

    invitationMail(name,email)

    res.status(201).json({error:false, message:`The ${name} has registered successfully with ${email}`})
}

//! Login user layer
let loginUser = async (req,res,next)=>{

    try{

        let {name,email,pass} = req.body

        let isEmailAvailable = await student.findOne({email})


        if(isEmailAvailable && await isEmailAvailable.CompareMyPass(pass)){

            let {otp} = await studentOtp()

            let sendOtpStudent = await student.findOneAndUpdate({email},{otp},{new:true, runValidators:true})

            res.status(200).json({error:false, message:`${name} login successfully`, data:sendOtpStudent})

        }

        res.status(400).json({error:true, message:`Sorry there is no user with the email ${email}`})

    }
    catch(err)
    {
        next(err)
    }
}


module.exports = {
    createStudent,
    loginUser
}