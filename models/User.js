const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
{
    firstname: {type: String, default: null, required:true},
    lastname: {type: String,default: null, required:true,},
    dob: {type: String,required:true},
    username: {type: String,required:true,unique:[true,"username is already taken"]},
    email: {type: String,required:true,unique:[true,"email is already taken"]},
    password: {type: String, requird: true},
}, {timestamps: true});
    
module.exports= mongoose.model('user', UserSchema);