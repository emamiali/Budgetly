const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const requireLogin = require('../middlewares/requireLogin');

const Saving = mongoose.model('savings');


module.exports = (app) => {

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

  app.get('/api/savings', requireLogin, function(req, res) {
    Saving
    .find({})
    .where({ _user: req.user.id })
    .exec( function(err, savings) {
      if (err || !savings ) {
        return res.status(404).send({ message: 'Savings Not found!!' });
      }
      res.send(savings);
    });
  });

  //add the authentication middleware so the req will have access to the user. and the user ID.
  app.post('/api/savings', requireLogin, function (req, res) {

    const newSaving = new Saving ();

    newSaving._user = req.user.id;
    newSaving.savingTitle = req.body.title;
    newSaving.savingAmount = req.body.amount;

    newSaving.save(function(err, saving) {
      if (err)
        res.send(err);
      res.json({
        message: 'Saving Successfully Added'
      });
    });
  });

  app.get('/api/savings/:saving_id', function(req, res) {
    Saving
      .findById(req.params.saving_id)
      .exec(function(err, foundSaving) {
        if (err || !foundSaving) {
          return res.status(404).send({ message: 'Saving Not found!!' });
        }
        res.send(foundSaving);
      });
  });

  app.put('/api/savings/:saving_id', requireLogin, function(req, res) {
    let query = {
      _id: req.params.saving_id
    }

    if (req.user_id) {
      query.user = req.user_id
    }

    Saving
      .findOneAndUpdate(query, req.body)
      .exec(function(err, saving) {
        if (err || !saving) {
          return res.status(404).send({ message: 'Failed to update saving!!'});
        }
        res.status(204).send();
      });
  });

  app.delete('/api/savings/:saving_id', requireLogin, function(req, res) {
    let query = {
      _id: req.params.saving_id
    }

    if (req.user_id) {
      query.user = req.user_id
    }

    Saving
      .findOneAndRemove(query)
      .exec(function(err, saving) {
        if (err || !saving) {
          return res.status(404).send({ message: 'Failed to Delete Saving!!' });
        }
        res.status(204).send();
      });
  });
}
