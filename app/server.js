var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./public"));

//Make public directroy visible to for the home.html
app.use(express.static(path.join(__dirname, './app/public')));


var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./routing/apiRoutes.js")(app);

require("./routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});