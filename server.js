let express = require("express");
let PORT = process.env.PORT || 3000;
let app = express();
let router = express.Router();

app.use(express.static(__dirname + "/public"));
app.use(router);

app.listen(PORT, function () {
    console.log ("Listening on port:" + PORT)
});