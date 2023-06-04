const { userModel} = require('./../../../models/users');

const { userValidation } = require("../../validation/user.validation");

class UserController {
    async createUser(req, res, next) {
        try {
            await userValidation.validateAsync(req.body);
            
            
            
        } catch (error) {
            next(error);
        }
    }
    
   
}

module.exports = {
    UserController: new UserController()
};
