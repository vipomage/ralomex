//Install express server
const express = require('express');
const path = require('path');
const port = 8080;
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || port,()=>{
  console.log(`Running on ${process.env.PORT || port}`)
});
