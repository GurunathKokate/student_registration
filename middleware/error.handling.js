let PageNotFound = ("*",(req,res,next)=>{

    res.status(404).json({error:true,message:"Page not found"})
})


let ErrorHandling = (error,req,res,next)=>{

    res.status(400).json({error:true,message:error.message})
}


module.exports = {PageNotFound,ErrorHandling}