const bcrypt = require("bcryptjs");
const User = require("../models/user");

const validateEmail = (req, res, next) => {
  const email = req.body.email;
  const validate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (validate.test(String(email).toLowerCase())) return next();
  else {
    res.status(400).send("Wrong email format.");
  }
};

const userController = {
  index(req, res) {
    User.find({}, (err, users) => {
      if (err) {
        res.status(500).send("Error on query.");
      }
      res.send(users);
    });
  },
  find(req, res) {
    User.findOne(req.query, (err, user) => {
      if (err) {
        res.status(500).send("Error on query.");
        return
      }
      if (!user) {
        res.status(404).send("User is not found");
        return
      }
      res.send(user);
    });
  },
  register(req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    // if email exist
    User.findOne({ email: email }, (err, user) => {
      if (err) throw err
      if (user != null) {
        res.status(400).send("Email is already taken.");
      } else {
        // if username exist
        User.findOne({ username: username }, (err, user1) => {
          if (err) throw err
          if (user1 != null) {
            res.status(400).send("Username is already taken.");
          } else {
            let user = new User({
              firstName,
              lastName,
              email,
              username,
              password
            });

            user.save();

            res.status(200).send("You are ready to login!");
          }
        });
      }
    });
  },
  login(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    User.findOne({ username: username }, (err, user) => {
      if (err) throw err
      if (!user) {
        res.status(400).send("Username or Password is not match");
      } else {
        bcrypt.compare(password, user.password, function(err, isMatch) {
          if (err) throw err;
          if (isMatch) {
            delete user.password;
            res.status(200).send(user);
          } else {
            res.status(400).send("Username or Password is not match");
          }
        })
      }
    });
  },
  forgetPassword(req, res) {
    // idk maybe send email to reset password
  },
  createNewPassword(req, res) {
    // update new hash password to database
  },
  verification(req, res) {
    User.findOne({ _id: req.body.uid }, (err, user) => {
      if (err) throw err;
      res.send(user);
    });
  },
  update(req, res) {
    User.findOne({ _id: req.body._id }, (err, user) => {
      if (err) throw err;
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.password = req.body.password;
      user.permission = req.body.permission;
      user.save();
      res.status(200).send("done");
    });
  },
  delete(req, res) {
    User.deleteOne(req.body, err => {
      if (err) throw err;
      res.status(200).send("done");
    });
  }
};

module.exports = {
  userController,
  validateEmail
};
