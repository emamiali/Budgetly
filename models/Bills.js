const mongoose = require('mongoose');
const { Schema } = mongoose;

const billsSchema = new Schema({
  billTitle: String,
  billAmount: Number,
  _user: { type: Schema.Types.ObjectId, ref: 'User'},
  _totalBudget: {type: Schema.Types.ObjectId, ref: 'TotalAmount'}
});

mongoose.model('bills', billsSchema);
