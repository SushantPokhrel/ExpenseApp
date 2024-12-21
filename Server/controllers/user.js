const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../authentication/auth');
exports.handleSignup = async (req,res)=>{
try {
    const {username,email,password} = req.body;

//check if user already exist
const existingUser = await User.findOne({email});
if(existingUser){
    return res.status(404).json({"message":"User already exist"})
}

//Hash passowrd
const hashedPassowrd = await bcrypt.hash(password,10);

//Create new user

const user = new User({
    username,
    email,
    password:hashedPassowrd
})
await user.save();
res.status(201).json({"message":"User created sucessfully"})
}
 catch (error) {
    res.status(500).json({"message":"Server Error: ",error})
}
}

exports.handleLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(404).json({"message":"User not Found"});
    }
    //compare password
    const isPasswordCorrect = await bcrypt.compare(password,user.password);
    if(isPasswordCorrect == false){
        return res.status(400).json({"message":"Invalid Creditals"});
    }

    //generate JWT
    const token = generateToken({_id:user._id});
    res.status(200).json({
        message:'Login sucessful',
        token,
        user:{ id:user._id,
        username:user.username,
        email:user.email},
    })
    } catch (error) {
        res.status(500).json({"message":"Server Error"})
    }
    
}

exports.getUser = async (req,res)=>{
    try {
        // The `auth` middleware adds `req.user` after verifying the token
        const userId = req.user._id;
    
        // Fetch the user from the database, excluding the password field
        const user = await User.findById(userId).select('-password');
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user details' });
      }
};