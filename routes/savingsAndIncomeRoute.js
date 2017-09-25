const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const requireLogin = require('../middlewares/requireLogin');

const Total = mongoose.model('totals');

module.exports = (app) => {

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.post('/api/savings_and_income', (req, res) => {
    const newTotal = new Total();

    newTotal.income = req.body.income;
    newTotal.savingsGoal = req.body.savingsGoal;
    newTotal._user = req.user._id;

    newTotal.save((err, saving_income ) => {
      if (err)
        res.send(err);
      res.json({
        message: "Savings and Income Successfully Added"
      });
    });
  });








}
