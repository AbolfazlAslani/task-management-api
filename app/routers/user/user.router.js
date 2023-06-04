const { UserController } = require('../../http/controllers/users/user.controller');

const router = require('express').Router();



router.post("/create",UserController.createUser)

module.exports = {
    UserRouter : router

}