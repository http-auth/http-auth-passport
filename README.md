# http-auth-passport
[Passport.js](http://www.passportjs.org/) integration with [http-auth](https://github.com/gevorg/http-auth) module.

[![build](https://github.com/http-auth/http-auth-passport/workflows/build/badge.svg)](https://github.com/http-auth/http-auth-passport/actions/workflows/build.yml)

## Installation

Via git (or downloaded tarball):

```bash
$ git clone git://github.com/http-auth/http-auth-passport.git
```
Via [npm](http://npmjs.org/):

```bash
$ npm install http-auth-passport
```    

## Usage
```javascript
// Express module.
const express = require("express");

// Authentication module.
const auth = require("http-auth");
const authPassport = require("http-auth-passport");
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
```


## Running tests

It uses [mocha](https://mochajs.org/), so just run following command in package directory:

```bash
$ npm test
```

## License

The MIT License (MIT)