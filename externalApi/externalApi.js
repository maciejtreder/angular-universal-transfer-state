const express = require('express');

const app = express();

app.get('/api/fast', (req, res) => {
  console.log('fast endpoint hit');
  res.send({response: 'fast'});
});

app.get('/api/slow', (req, res) => {
  setTimeout(() => {
      console.log('slow endpoint hit');
      res.send({response: 'slow'});
  }, 5000);
});

app.listen(8081, () => {
  console.log('Listening');
});
