// Express module.
const express = require("express");

// Authentication module.
const auth = require("http-auth");
const authPassport = require("../src/index");
const basic = auth.basic({
  realm: "Simon Area.",
  file: __dirname + "/../data/users.htpasswd" // gevorg:gpass, Sarah:testpass
});

// Application setup.
const app = express();

// Passport.
const passport = require("passport");
passport.use(authPassport(basic));

// Setup route.
app.get("/", passport.authenticate("http", { session: false }), (req, res) => {
  res.end(`Welcome to private area - ${req.user}!`);
});

// Start server.
app.listen(1337, () => {
  // Log URL.
  console.log("Server running at http://127.0.0.1:1337/");
});
