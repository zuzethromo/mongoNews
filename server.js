let express = require("express");
let mongoose = require("mongoose");
let expressHandlebars = require("express-handlebars");
let bodyParser = require("body-parser");

let PORT = process.env.PORT || 3000;
let app = express();
let router = express.Router();

require("./config/routes")(router);

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", expressHandlebars ({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded ({
    extended: false
}));

app.use(router);

let db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadLines";
mongoose.connect(db, function(error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("mongoose connection is successful");
    }
});

app.listen(PORT, function () {
    console.log ("Listening on port:" + PORT)
});