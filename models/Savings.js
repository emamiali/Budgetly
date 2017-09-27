const mongoose = require('mongoose');
const { Schema } = mongoose;

const savingsSchema = new Schema({
  savingTitle: String,
  savingAmount: Number,
  _user: { type: Schema.Types.ObjectId, ref: 'User'},
  _totalBudget: {type: Schema.Types.ObjectId, ref: 'TotalAmount'}
});

mongoose.model('savings', savingsSchema);
