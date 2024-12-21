const mongoose = require("mongoose");
const ExpenseSchema = new mongoose.Schema({
  userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
  title: {
    type: String,
    required: true,
    maxLength: 50,
    trim: true,
  },
  amount: {
    type: Number,
    maxLength: 20,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    default: "Expense",
  },
  date: {
    type: Number,
    required: true,
    trim: true,
    default: Date.now(),
  },
  category:{
    type:String,
    required: true,
    trim:true,
},
description:{
    type:String,
    maxLength:600,
    required: true,
    trim:true,
}
},{ timestamps:true });

module.exports = mongoose.model('expense',ExpenseSchema);