const express = require('express');
const path = require('path');
const app = express();
const port = 3002;

app.use('/', express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  try {
    res.sendFile(
      'index.html', 
    );
  } catch (e) {
    res.send(e);
    console.error(e);
  }
});

app.listen(port, () => {
  console.log(path.join(__dirname, 'public'));
  console.log(`Example app listening at http://localhost:${port}`);
});

