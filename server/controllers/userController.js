const bcrypt = require('bcryptjs')

const userController = {
  index(req, res) {
    console.log("indexing")
    res.send('indexing')
  },
  create(req, res) {
    console.log("creting user")
    console.log(req.body)
    // res.send('yang mai dai tum // userController:9')

    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password
    const password2 = req.body.password2

    if (password.equal(password2)) {
      let newUser = new User({
        firstName,
        lastName,
        email,
        username,
        password
      })
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) {
            console.log(err);
          }
          newUser.password = hash;
          newUser.save((err) => {
            if (err) {
              console.log(err);
              return;
            } else {
              // req.flash('success', 'You are now registered and can log in');
              res.redirect('/users/login');
            }
          });
        });
      });
    }
  },
  update(req, res) {

  },
  delete(req, res) {

  }
}

module.exports = userController
