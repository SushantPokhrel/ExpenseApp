const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        maxLength:50,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        maxLength:255,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minLength:8,
        trim:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

module.exports = mongoose.model('user', UserSchema);

