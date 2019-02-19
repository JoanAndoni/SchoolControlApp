const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Profesor = require('../models/profesor');

router.post('/register', (req, res, next) => {

  let newProfesor = new Profesor({
    permiso: req.body.permiso,
    matricula: req.body.matricula,
    nombre: req.body.nombre,
    paterno: req.body.paterno,
    materno: req.body.materno,
    posicion: req.body.posicion,
    telefono: req.body.telefono,
    correo: req.body.correo,
    password: req.body.password
  });

  Profesor.getProfesorByMatricula(newProfesor.matricula, (err, profesor) => {
    if (err) throw err;
    if (profesor) {
      return res.json({
        success: false,
        msg: 'Ya existe un profesor con esa matricula'
      });
    }
    Profesor.addProfesor(newProfesor, (err, profesor) => {
      if (err) {
        res.json({
          success: false,
          msg: 'No se pudo registrar a profesor'
        });
      } else {
        res.json({
          success: true,
          msg: 'Profesor registrado'
        });
      }
    });
  });
});

router.post('/authenticate', (req, res, next) => {
  const matricula = req.body.matricula;
  const password = req.body.password;

  Profesor.getProfesorByMatricula(matricula, (err, profesor) => {
    if (err) throw err;
    if (!profesor) {
      return res.json({
        success: false,
        msg: 'No se encontro al profesor'
      });
    }

    Profesor.comparePassword(password, profesor.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(profesor.toJSON(), config.secret, {
          expiresIn: 604800 // 1 week
        });
        res.json({
          success: true,
          token: 'JWT ' + token,
          profesor: {
            id: profesor._id,
            permiso: profesor.permiso,
            matricula: profesor.matricula,
            nombre: profesor.nombre,
            paterno: profesor.paterno,
            materno: profesor.materno,
            posicion: profesor.posicion,
            telefono: profesor.telefono,
            correo: profesor.correo
          }
        });
      } else {
        return res.json({
          success: false,
          msg: 'Contraseña incorrecta'
        });
      }
    });
  });
});

router.get('/profile', passport.authenticate('jwt', {
  session: false
}), (req, res, next) => {
  res.json({
    profesor: req.user
  });
});

router.post('/delete', (req, res, next) => {
  let matricula = req.body.matricula;

  Profesor.getProfesorByMatricula(matricula, (err, profesor) => {
    if (err) throw err;
    if (!profesor) {
      return res.json({
        success: false,
        msg: 'No se encontro al profesor'
      });
    }

    Profesor.deleteProfesor(matricula, (err, req) => {
      if (err) {
        res.json({
          success: false,
          msg: 'No se pudo eliminar al profesor'
        });
      } else {
        res.json({
          success: true,
          msg: 'Profesor eliminado exitosamente'
        });
      }
    });
  });
});

module.exports = router;
