let studentOtp = async ()=>{

    let otp = Math.floor(Math.random()*899999+100000).toString();

    console.log(otp);

    return {otp}
}

module.exports = { studentOtp}