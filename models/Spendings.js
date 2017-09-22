const mongoose = require('mongoose');
const { Schema } = mongoose;

const spendingsSchema = new Schema({
  spendingTitle: String,
  spendingAmount: Number,
  _user: { type: Schema.Types.ObjectId, ref: 'User'},
  _totalBudget: {type: Schema.Types.ObjectId, ref: 'TotalAmount'}
});

mongoose.model('spendings', spendingsSchema);
