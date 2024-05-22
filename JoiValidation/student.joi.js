const Joi = require('joi');

let studentValidate = Joi.object({

    //! Note while writing this code remember that is "required" and "messages" if not write them properly it will throw error
    name:Joi.string().required().messages({
        "string.base":"name must be in string",
        "String.empty":"name is mandatory"
    }),

    age:Joi.number().min(12).max(25).required().messages({
        "string.base":"gender should be in stirng",
        "string.empty":"gender is mandatory"
    }),
    mobile:Joi.number().required().messages({
        "string.base":"gender should be in stirng",
        "string.empty":"gender is mandatory"
    }),
    password:Joi.string().required().messages({
        "string.base":"gender should be in stirng",
        "string.empty":"gender is mandatory"
    })

})

module.exports = studentValidate