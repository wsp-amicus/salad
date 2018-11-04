import express from "express";
const fs = require("fs");
const https = require("https");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("../config/database");
const app = express();
const fileUpload = require("express-fileupload");

let port = process.env.PORT || 5000;

mongoose.connect(config.database);
let db = mongoose.connection;

// Check connection
db.once("open", function() {
  console.log("Connected to MongoDB");
});

// Check for DB errors
db.on("error", function(err) {
  console.log(err);
});

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use(fileUpload());

app.get("/test", (req, res) =>
  res.send("You are now connected with backend !")
);

// register route in app
app.use("/users", require("./routes/users"));
app.use("/dashboard", require("./routes/dashboard"));
app.use("/ingredients", require("./routes/ingredient"));
app.use("/products", require("./routes/product"));
app.use("/storage", require("./routes/storage"));

// use this in production only
if (process.env.NODE_ENV === "production") {
  // redirect http to https
  app.use(function(req, res, next) {
    if (req.secure) {
      // request was via https, so do no special handling
      next();
    } else {
      // request was via http, so redirect to https
      res.redirect("https://" + req.headers.host + req.url);
    }
  });
  // serve react app in production
  app.use(express.static(`${__dirname}/../build`));

  // Handles any requests that don't match the ones above
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/../build/index.html"));
  });

  // # certificate part HTTPS
  // Certificate
  const privateKey = fs.readFileSync(
    "/etc/letsencrypt/live/wsp.thitgorn.com/privkey.pem",
    "utf8"
  );
  const certificate = fs.readFileSync(
    "/etc/letsencrypt/live/wsp.thitgorn.com/cert.pem",
    "utf8"
  );
  const ca = fs.readFileSync(
    "/etc/letsencrypt/live/wsp.thitgorn.com/chain.pem",
    "utf8"
  );

  const credentials = {
    key: privateKey,
    cert: certificate,
    ca: ca
  };

  const httpsServer = https.createServer(credentials, app);
  httpsServer.listen(5556, () => {
    console.log("HTTPS Server running on port 5556");
  });
}

app.listen(port, () => {
  console.log(`Server started at port: ${port}`);
});
