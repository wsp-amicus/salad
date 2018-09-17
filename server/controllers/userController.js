const bcrypt = require('bcryptjs')
const User = require('../models/user')

const userController = {
  register(req, res) {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password

    let user = new User({
      firstName,
      lastName,
      email,
      username,
      password
    })

    user.save()

    res.redirect('/users/login')
  },
  login(req, res) {
    const username = req.body.username
    const password = req.body.password
    User.findOne({username: username}, (err, user) => {
      if(err) throw err;
      if(!user){
        res.send({ 
              header: 401,
              body: "username or password is not match" 
        })
      }

      bcrypt.compare(password, user.password, function(err, isMatch){
        if(err) throw err;
        if(isMatch){
          res.send({
               header: 200,
               body: user._id
           })
        } else {
          res.send({ 
              header: 401,
              body: "username or password is not match" 
          })
        }
      });
    })
  },
  forgetPassword(req, res) {
    // idk maybe send email to reset password
  },
  createNewPassword(req, res) {
    // update new hash password to database
  },
}

module.exports = userController
