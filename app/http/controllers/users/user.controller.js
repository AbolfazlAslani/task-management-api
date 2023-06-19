const { hashString } = require("../../../modules/functions");
const { userValidation } = require("../../../http/validation/user.validation");
const { userModel } = require("../../../models/users");

async function checkUserExistAndCreate(body){
    try {
        await userValidation.validateAsync(body)
        
        const checkUsername = await userModel.findOne({username: body.username})
        if (checkUsername) throw new Error("نام کاربری تکراری میباشد")
        const checkEmail = await userModel.findOne({email: body.email})
        if (checkEmail) throw new Error("ایمیل وارد شده تکراری میباشد")
        const checkMobile = await userModel.findOne({mobile: body.mobile})
        if (checkMobile) throw new Error("شماره موبایل تکراری میباشد")
        body.password = await hashString(body.password)
        const result = await userModel.create(body)
        if(!result) throw new Error("مشکل داخلی سرور");
        
        return result
        

    } catch (error) {
        throw error
    }
}

module.exports = {

    checkUserExistAndCreate
}