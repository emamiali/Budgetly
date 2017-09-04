const mongoose = require('mongoose');

const Bills = mongoose.model('bills');


module.exports = (app) => {
  app.get('/api/bills', async (req, res) => {
    const bills = await Bills.find({ _user: req.user.id });
    console.log('this is bills: ', bills);
    res.send({ message: "some message"})
  });
  app.post('/api/bill', async (req, res) => {
    const newPost = new Post(req.body);
      console.log('req from post: ', req);
  });
}
