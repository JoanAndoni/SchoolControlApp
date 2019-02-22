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
        msg: 'No se ha podido crear el administrador'
      });
      // Return the success state as true if it could be registered
    } else {
      res.json({
        success: true,
        msg: 'El administrador se creo exitosamente'
      });
    }
  });
});

router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  Admin.getAdminByUsername(username, (err, admin) => {
    if (err) throw err;
    if (!admin) {
      return res.json({
        success: false,
        msg: 'No se encontro un administrador con ese nombre de usuario'
      });
    }

    Admin.comparePassword(password, admin.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(admin.toJSON(), config.secret, {
          expiresIn: 604800 // 1 week
        });
        res.json({
          success: true,
          token: 'JWT ' + token,
          admin: {
            id: admin._id,
            username: admin.username
          }
        });
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
  session: false
}), (req, res, next) => {
  res.json({
    admin: req.user
  });
});

router.post('/delete', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  Admin.getAdminByUsername(username, (err, admin) => {
    if (err) throw err;
    if (!admin) {
      return res.json({
        success: false,
        msg: 'No se encontro un administrador con ese nombre de usuario'
      });
    }

    Admin.comparePassword(password, admin.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        Admin.deleteAdmin(username, (err, borrado) => {
          if (err) throw err;
          if (!borrado) {
            return res.json({
              success: false,
              msg: 'No se pudo eliminar el administrador'
            });
          } else {
            return res.json({
              success: true,
              msg: 'Administrador eliminado'
            });
          }
        })
      } else {
        return res.json({
          success: false,
          msg: 'Contraseña incorrecta'
        });
      }
    });
  });
});

router.post('/getAdmins', (req, res, next) => {
  Admin.getAllAdmins((err, admins) => {
    if (err) throw err;
    if (!admins) {
      return res.json({
        success: false,
        msg: 'No hay administradores'
      });
    } else {
      return res.json({
        success: true,
        admins
      });
    }
  });
});

// Router module for make the petitions
module.exports = router;
