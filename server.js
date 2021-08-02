const express = require("express");
const bodyParser = require("body-parser");

const app = express();



// parse requests of content-type - application/json
//app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({
  extended: true
//}));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "ok api 2 " });
});

require("./app/routes/customer.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server 2 is running on port ${PORT}.`);
});
