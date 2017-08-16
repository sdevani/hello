var express = require('express');
var app = express();

app.get("/", function(request, response) {
  response.sendFile("/Users/shehzan/code/shehzan/hello/index.html");
});

app.get("/my_javascript.js", function(request, response) {
  response.sendFile("/Users/shehzan/code/shehzan/hello/my_javascript.js");
});

app.listen(3000, function() {
  console.log("This server just started. yay.");
});



// var fs = require('fs');

// console.log("hello");

// fs.readFile("content.txt", 'utf8', function(err, data) {
//   console.log(data);
// });

// console.log("Done.");