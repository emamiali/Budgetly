const mongoose = require('mongoose');
const { Schema } = mongoose;

const spendingsSchema = new Schema({
  spendingTitle: String,
  spendingAmount: Number,
  _user: { type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('spendings', spendingsSchema);
