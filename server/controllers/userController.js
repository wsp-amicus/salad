// #######################################
// #######################################
// 
// READ THIS
// I already hash password before sending to server
// you don't need to hash again
// I already check confirm password from client side
// you can save all recieve data right the way.
// 
// #######################################
// #######################################

// const bcrypt = require('bcryptjs')
const User = require('../models/user')

const userController = {
  register(req, res) {
    // this function is for creating the user
    // in case user register it
    // 
    // recieve the data from client
    // save the data to database
    // then redirect to users/login

    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const username = req.body.username
    const hashPassword = req.body.password

    let newUser = new User({
      firstName,
      lastName,
      email,
      username,
      hashPassword
    })

    newUser.save((err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        res.redirect('/users/login');
      }
    });
  },
  login(req, res) {
    // get username ,hash password from login field
    // find username from database
    // check if hash password is corrent // use bcryptjs
    // 
    // return status
    // case username is not found or password is not correct
    // return { 
    //           header: 401,
    //           body: "username or password is not match" 
    //        }
    // case success
    // return 
    //        {
    //            header: 200
    //            body: "" // could be cookie token one day expire token
    //        }
  },
  forgetPassword(req, res) {
    // idk maybe send email to reset password
  },
  createNewPassword(req, res) {
    // update new hash password to database
  },
}

module.exports = userController
