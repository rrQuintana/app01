///Iniciamos express para su uso
const express = require("express");
const app = express();
const port = "3000";

var bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./routes/routes")(app);

app.listen(port, (err) => {
  if (err) console.error(err);
  console.log("server listening on port " + port);
});