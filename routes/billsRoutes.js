const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const requireLogin = require('../middlewares/requireLogin');

const Bill = mongoose.model('bills');

module.exports = (app) => {

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

  app.get('/api/bills', requireLogin, function(req, res) {
    Bill
    .find({})
    .where({ _user: req.user.id})
    .exec( function(err, bills) {
      if (err || !bills ) {
        return res.status(404).send({ message: 'Bills Not found!!' });
      }    
      res.send(bills);
    });
  });

  //add the authentication middleware so the req will have access to the user. and the user ID.
  app.post('/api/bills', requireLogin, function (req, res) {

    const newBill = new Bill();

    newBill._user = req.user.id;
    newBill.billTitle = req.body.title;
    newBill.billAmount = req.body.amount;

    newBill.save(function(err, bill) {
      if (err) {
        res.send(err);
      }
      console.log('this is the bill created: ', bill);
      res.json({
        message: 'Bill Successfully Added'
      });
    });
  });

  app.get('/api/bills/:bill_id', function(req, res) {
    Bill
      .findById(req.params.bill_id)
      .exec(function(err, foundBill) {
        if (err || !foundBill) {
          return res.status(404).send({ message: 'Bill Not found!!' });
        }
        res.send(foundBill);
      });
  });

  app.put('/api/bills/:bill_id', requireLogin, function(req, res) {
    let query = {
      _id: req.params.bill_id
    }

    if (req.user_id) {
      query.user = req.user_id
    }

    Bill
      .findOneAndUpdate(query, req.body)
      .exec(function(err, bill) {
        if (err || !bill) {
          return res.status(404).send({ message: 'Failed to update bill!!'});
        }
        res.status(204).send();
      });
  });

  app.delete('/api/bills/:bill_id', requireLogin, function(req, res) {
    let query = {
      _id: req.params.bill_id
    }

    if (req.user_id) {
      query.user = req.user_id
    }

    Bill
      .findOneAndRemove(query)
      .exec(function(err, bill) {
        if (err || !bill) {
          return res.status(404).send({ message: 'Failed to Delete Bill!!' });
        }
        res.status(204).send();
      });
  });
}
