const nodemailer = require('nodemailer');

//~ This is used to send the mail to the person who registered them self 
let transporter = nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:"gurunathkokate2739@gmail.com",
        pass:"ilfqsyouwsclswmz"
    }
})

let invitationMail = async (name,email)=>{

    let mailOption = {
        from:"gurunathkokate2739@gmail.com",
        to:email,
        subject:"Welcome message",
        html:`<h1>Thanks for registering with us ${name}</h1>`
    }    

    transporter.sendMail(mailOption, ()=>{
        console.log("Mail Sent successfully");
    })
}

module.exports ={
    invitationMail
}