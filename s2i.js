const app = require('express')()

app.get('/', (req, res) => {
  res.send("Congrats - you built your first S2I app !");
});
 
module.exports.app = app;
