const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello'})
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('server on port: ', PORT);
})
