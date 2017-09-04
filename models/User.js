const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  name: String,
  totalBudget: Number,
  totalSavings: Number
});

mongoose.model('users', userSchema);
