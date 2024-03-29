const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});


  // Serve any static files
  app.use(express.static(path.join(__dirname, 'dist')));
    
  // Handle React routing, return all requests to React app
  app.get('/page', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });


app.listen(port, () => console.log(`Listening on port ${port}`));