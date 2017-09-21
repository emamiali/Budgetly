const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');

const User = mongoose.model('users');

module.exports = (app) => {

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/dashboard');
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })

  app.put('/api/profile/:user_id', function (req, res) {
    User.findById(req.user._id, function (err, user) {
      if (err)
        res.send(err);
        console.log('this is req.body: ', req.body);
      (req.body.totalSavings) ? user.totalSavings = req.body.totalSavings: null;
      (req.body.totalBudget) ? user.totalBudget = req.body.totalBudget: null;

      user.save(function (err) {
        if(err)
          res.send(err);
        res.json({ message: "user was updated "});
      });
    });
  });
};
