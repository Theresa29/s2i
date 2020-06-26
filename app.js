const app = require('express')()

app.get('/', (req, res) => {
  res.send("Congrats- you built your first S2I App!");
});
 
module.exports.app = app;
