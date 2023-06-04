const joi = require('joi');

const userValidation = joi.object({
    name : joi.string().required().pattern(/^[\u0600-\u06FF\s]+$/).messages({
        'string.pattern.base': "نام وارد شده باید با حروف فارسی باشد",
        'any.required':'نام نمیتواند خالی باشد'
    }),
    lastname : joi.string().required().pattern(/^[\u0600-\u06FF\s]+$/).messages({
        "string.pattern.base":"نام خانوادگی وارد شده باید با حروف فارسی باشد",
        'any.required':'نام خانوادگی نمیتواند خالی باشد'

    }),
    mobile : joi.string().required().pattern(/^09\d{9}$/).messages({
        'string.pattern.base' : "شماره موبایل وارد شده صحیح نمیباشد",
        'any.required':"وارد کردن شماره موبایل الزامی میباشد"
    
    }),
    email : joi.string().email().required().messages({
        'string.email':"ایمیل وارد شده صحیح نمیباشد",
        'any.required':'وارد کردن ایمیل الزامی میباشد'
    
    }),
    username : joi.string().min(4).max(16).required().messages({
        'string.min':"یوزرنیم باید بیشتر از ۴ کاراکتر باشد",
        'string.max':"یوزر نیم باید کمتر از ۱۶ کاراکتر باشد",
        'any.required':"وارد کردن نام کاربری الزامی میباشد."
    }),
    password: joi.string().min(8).max(32).pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/).required().messages({
        'string.pattern.base':"پسورد باید شامل حداقل یک حرف بزرگ و کوچک و حروف !@#$%^&* و ... باشد",
        'string.min':"پسورد باید بیشتر از ۸ کاراکتر باشد",
        'string.max':"پسورد باید کمتر از ۳۲ کاراکتر باشد",
        'any.required':"وارد کردن پسورد الزامی میباشد."
    })
    
})

module.exports = {
    userValidation
}
