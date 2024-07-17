const mongoose = require('mongoose')   
const {Schema} = mongoose

const userSchema = new Schema({
title: {
    type :String,
    required: true,
    unique : true,
    trim: true 
}, 
 username: {
   type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
   
});
const User = mongoose.model('User', userSchema);
module.exports = User