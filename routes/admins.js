const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Admin = require('../models/admin');

//Register a user
router.post('/register', (req, res, next) => {
  // Create a new user with the information that they subscribed
  let newAdmin = new Admin({
    username: req.body.username,
    password: req.body.password
  });

  // Add the user to the db
  Admin.addAdmin(newAdmin, (err, user) => {
    // Return the success state as false if it couldn't be registered
    if (err) {
      res.json({
        success: false,
        msg: 'Failed to register admin'
      });
      // Return the success state as true if it could be registered
    } else {
      res.json({
        success: true,
        msg: 'Admin registered'
      });
    }
  });
});

// Authenticate the user that we passed with the parameters
router.post('/authenticate', (req, res, next) => {
  // We just need to authenticate the username and the password
  const username = req.body.username;
  const password = req.body.password;

  // Get user by username and then compare the password
  Admin.getAdminByUsername(username, (err, admin) => {
    if (err) throw err;
    if (!admin) {
      return res.json({
        success: false,
        msg: 'admin'
      });
    }

    // Check if the password that we send is correct
    Admin.comparePassword(password, admin.password, (err, isMatch) => {
      // Check some error
      if (err) throw err;

      // Check the password by encripting it and compare it with the one in the db
      if (isMatch) {
        /*const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // 1 week
        });*/
        // Create a token that is going to be useful for one week
        const token = jwt.sign(admin.toJSON(), config.secret, {
          expiresIn: 604800 // 1 week
        });

        // Response of the success match returning the user, token and the success state ad true
        res.json({
          success: true,
          token: 'JWT ' + token,
          admin: {
            id: admin._id,
            username: admin.username
          }
        });
        // If the authentication is wrong return the success state as false
      } else {
        return res.json({
          success: false,
          msg: 'Wrong password'
        });
      }
    });
  });
});

// Profile, access to the data using the token that we generated and check if it still valid
router.get('/profile', passport.authenticate('jwt', {
  // if it is not valid return session as false
  session: false
}), (req, res, next) => {
  // if it is valid return the user
  res.json({
    // The req.user it has to be always like that is part of the passport library
    admin: req.user
  });
});



// Router module for make the petitions
module.exports = router;
