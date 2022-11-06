//jshit esversion:6

const express = require("express"); // npm i express
const bodyParser = require("body-parser"); // npm i body-parser

const app = express(); // create app constant by using express

app.use('view engine', 'ejs'); //this line of code tells our app which is generated using Express to use EJS

app.get("/", function(req, res){ // Creatin GET route

//	res.send("Hello"); // sends browsing the word "Hello", when a user tries to accsess the home route


const today = new Date();
const currentDay = today.getDay();
const day = "";

if (currentDay === 6 || currentDay === 0) {
  // res.write("<h1>Yay it's the weekend! YUIIIIII!!!</h1>");
  // res.write("<p>I haven't to work!</p>");
  day = "Weekend";
    res.sendFile(__dirname + "/index.html");
} else {
  day = "Weekday";
  res.sendFile(__dirname + "/index.html");
}


});

app.listen(3000, function(){ // isten on port 3000
	console.log("Server started on port 3000"); // console.log that our server has been started
});
