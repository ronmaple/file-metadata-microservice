'use strict';

const express = require('express');
const cors = require('cors');
const formidable = require('formidable');
const fs = require('fs');


// const bp = require('body-parser');

// require and use "multer"...

var app = express();

app.use(cors());

app.use('/public', express.static(process.cwd() + '/public'));
// app.use(bp.urlencoded({extended: false}))

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse', (req, res) => {
  const form = formidable.IncomingForm();
  
  form.parse(req, (err, fields, files) => {
    console.log('fields', fields);
    
    console.log('files', files);
    
    console.log('try', files.upfile);
  
  })
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
