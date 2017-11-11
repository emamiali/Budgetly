const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Bills');
require('./models/Spendings');
require('./models/Savings')
require('./models/TotalAmount');
require('./services/passport');


// mongoose.connect(keys.mongoURI);
mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.send({ message: "Hello"});
})

require('./routes/authRoutes')(app);
require('./routes/billsRoutes')(app);
require('./routes/spendingsRoutes')(app);
require('./routes/savingsRoutes')(app);
require('./routes/savingsAndIncomeRoute')(app);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('/client/public'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html');
  });
}


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('server on port: ', PORT);
})
