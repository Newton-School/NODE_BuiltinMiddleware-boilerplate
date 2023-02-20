const fs = require('fs')
const express = require('express');
const app = express();


// WRITE BUILTIN MIDDLEWARE FOR express.static here





// WRITE BUILTIN MIDDLEWARE FOR express.urlencoded here


app.post('/api/v1/encodeddata', function (req, res) {
  
  const { name, email} = req.body;
  res.send(`Name: ${name}, Email: ${email}`);
  res.status(200)
    console.log(req.body);

});


// WRITE BUILTIN MIDDLEWARE FOR express.json here

app.post('/submit-form-json', (req, res) => {
    const name = req.body.Name;
    const email = req.body.Email;
    // Do something with the submitted data
    res.send(`Thanks for submitting the form, ${name}!`);
    res.status(200)
  });
module.exports = app;

