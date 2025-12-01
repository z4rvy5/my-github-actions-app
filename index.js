const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(' Auto deployed using Jenkins Webhook.');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
