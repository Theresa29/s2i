const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hi -from Appsody!");
});
 
module.exports.app = app;
