const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    name : {type : String , required: true},
    lastname : {type : String , requried : true},
    mobile : {type : String , required : true},
    email : {type: String , requried : true , unique : true},
    username : {type: String , required : true},
    password : {type:String , required: true}

})

const userModel = mongoose.model('User',UserSchema)
module.exports = {
    userModel

}