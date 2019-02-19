const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Alumno = require('../models/alumno');


router.post('/register', (req, res, next) => {

  let newAlumno = new Alumno({
    permiso: req.body.permiso,
    matricula: req.body.matricula,
    curp: req.body.curp,
    nombre: req.body.nombre,
    paterno: req.body.paterno,
    materno: req.body.materno,
    nivel: req.body.nivel,
    grado: req.body.grado,
    grupo: req.body.grupo,
    fechaNacimiento: req.body.fechaNacimiento,
    password: req.body.password
  });

  Alumno.getAlumnoByMatricula(newAlumno.matricula, (err, alumno) => {
    if (err) throw err;
    if (alumno) {
      return res.json({
        success: false,
        msg: 'Ya existe un alumno con esa matricula'
      });
    }

    Alumno.addAlumno(newAlumno, (err, alumno) => {
      if (err) {
        res.json({
          success: false,
          msg: 'No se pudo registrar al alumno'
        });
      } else {
        res.json({
          success: true,
          msg: 'Alumno registrado'
        });
      }
    });
  });
});


router.post('/authenticate', (req, res, next) => {

  const matricula = req.body.matricula;
  const password = req.body.password;

  Alumno.getAlumnoByMatricula(matricula, (err, alumno) => {
    if (err) throw err;
    if (!alumno) {
      return res.json({
        success: false,
        msg: 'No se encontro al alumno'
      });
    }

    Alumno.comparePassword(password, alumno.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(alumno.toJSON(), config.secret, {
          expiresIn: 604800 // 1 week
        });
        res.json({
          success: true,
          token: 'JWT ' + token,
          alumno: {
            id: alumno._id,
            permiso: alumno.permiso,
            matricula: alumno.matricula,
            curp: alumno.curp,
            nombre: alumno.nombre,
            paterno: alumno.paterno,
            materno: alumno.materno,
            nivel: alumno.nivel,
            grado: alumno.grado,
            grupo: alumno.grupo,
            fechaNacimiento: alumno.fechaNacimiento
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
    alumno: req.user
  });
});

router.post('/delete', (req, res, next) => {
  let matricula = req.body.matricula;
  Alumno.getAlumnoByMatricula(matricula, (err, alumno) => {
    if (err) throw err;
    if (!alumno) {
      return res.json({
        success: false,
        msg: 'No se encontro al alumno'
      });
    }

    Alumno.deleteAlumno(matricula, (err, req) => {
      if (err) {
        res.json({
          success: false,
          msg: 'No se pudo eliminar al alumno'
        });
      } else {
        res.json({
          success: true,
          msg: 'Alumno eliminado exitosamente'
        });
      }
    });
  });
});

module.exports = router;
