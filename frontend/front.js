var express = require('express');
var path = require('path');
var serveStatic = require("serve-static");

var app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));

var port = 5475;
app.listen(port);
console.log('server started: ', port);