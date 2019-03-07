const express = require("express");
const bodyParser = require("body-parser");
const request = require("@requestnetwork/payments-server")(process.env.API_KEY);


const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

    
app.post("/request", request.handler(process.env.ETH_ADDRESS));

app.use(function(err, req, res, next) {
  res.status(500);
  res.render("error", { error: err });
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});