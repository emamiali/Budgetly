const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const requireLogin = require('../middlewares/requireLogin');

const Spending = mongoose.model('spendings');

module.exports = (app) => {

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

  app.get('/api/spendings', requireLogin, function(req, res) {
    Spending
    .find({})
    .where({ _user: req.user.id })
    .exec( function(err, spendings) {
      if (err || !spendings ) {
        return res.status(404).send({ message: 'Spendings Not found!!' });
      }
      res.send(spendings);
    });
  });

  app.post('/api/spendings', requireLogin, function (req, res) {

    const newSpending = new Spending ();

    newSpending._user = req.user.id;
    newSpending.spendingTitle = req.body.title;
    newSpending.spendingAmount = req.body.amount;

    newSpending.save(function(err, spending) {
      if (err)
        res.send(err);
      res.json({
        message: 'Spending Successfully Added'
      });
    });
  });

  app.get('/api/spendings/:spending_id', function(req, res) {
    Spending
      .findById(req.params.spending_id)
      .exec(function(err, foundSpending) {
        if (err || !foundSpending) {
          return res.status(404).send({ message: 'Spending Not found!!' });
        }
        res.send(foundSpending);
      });
  });

  app.put('/api/spendings/:spending_id', requireLogin, function(req, res) {
    let query = {
      _id: req.params.spending_id
    }

    if (req.user_id) {
      query.user = req.user_id
    }

    Spending
      .findOneAndUpdate(query, req.body)
      .exec(function(err, spending) {
        if (err || !spending) {
          return res.status(404).send({ message: 'Failed to update spending!!'});
        }
        res.status(204).send();
      });
  });

  app.delete('/api/spendings/:spending_id', requireLogin, function(req, res) {
    let query = {
      _id: req.params.spending_id
    }

    if (req.user_id) {
      query.user = req.user_id
    }

    Spending
      .findOneAndRemove(query)
      .exec(function(err, spending) {
        if (err || !spending) {
          return res.status(404).send({ message: 'Failed to Delete Spending!!' });
        }
        res.status(204).send();
      });
  });
}
