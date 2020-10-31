const express = require('express');
const path = require('path');
require('dotenv').config(); // to read Env files
const app = express();

app.listen(process.env.PORT || 5000,() => {
    console.log('now listening for requests on port 4000')
});


if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}
