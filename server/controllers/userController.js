const bcrypt = require('bcryptjs')
const User = require('../models/user')

const userController = {
  register(req, res) {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password

    // if email exist
    User.findOne({email: email}, (err, user) => {
      if(err) throw err;
      if(user != null) {
        res.send({header: 401, body: 'Email is already taken.'})
      } else {
        // if username exist
        User.findOne({username: username}, (err, user1) => {
          if(err) throw err;
          if(user1 != null) {
            res.send({header: 401, body: 'Username is already taken.'})
          } else {
            let user = new User({
              firstName,
              lastName,
              email,
              username,
              password
            })

            user.save()

            res.send({header: 200, body: 'You are ready to login!'})
          }
        })
      }
    })
  },
  login(req, res) {
    const username = req.body.username
    const password = req.body.password
    User.findOne({username: username}, (err, user) => {
      if(err) throw err;
      if(!user){
        res.send({ 
              header: 401,
              body: "Username or Password is not match" 
        })
      } else {
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
                body: "Username or Password is not match" 
            })
          }
        });
      }
    })
  },
  forgetPassword(req, res) {
    // idk maybe send email to reset password
  },
  createNewPassword(req, res) {
    // update new hash password to database
  },
  verification(req, res) {
    User.findOne({_id: req.body.uid}, (err, user) => {
      if(err) throw err;
      res.send({
        username: user.username
      })
    })
  }
}

module.exports = userController
