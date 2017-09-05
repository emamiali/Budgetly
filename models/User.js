const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  name: String,
  email: String,
  avatar: String,
  totalBudget: Number,
  totalSavings: Number
});

mongoose.model('users', userSchema);
