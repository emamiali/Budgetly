const mongoose = require('mongoose');
const { Schema } = mongoose;

const totalAmountSchema = new Schema({
  totalSavings: Number,
  totalBudget: Number,
  _user: { type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('total', totalAmountSchema);
