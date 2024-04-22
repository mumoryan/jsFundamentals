const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use("/index.js", express.static(path.resolve(__dirname, 'index.js')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})