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

  let matricula = req.body.matricula;

  Profesor.getProfesorByMatricula(matricula, (err, profesor) => {
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
            correo: profesor.correo,
            clases: profesor.clases
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

router.post('/editPassword', (req, res, next) => {
  let matricula = req.body.matricula;
  let password = req.body.password;
  let newPassword = req.body.newPassword;

  Profesor.getProfesorByMatricula(matricula, (err, profesor) => {
    if (err) throw err;
    if (!profesor) {
      return res.json({
        success: false,
        msg: 'No se encontro un profesor con esa matricula'
      });
    }
    Profesor.comparePassword(password, profesor.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        Profesor.editPassword(matricula, newPassword, (err, editado) => {
          if (err) throw err;
          if (!editado) {
            return res.json({
              success: false,
              msg: 'No se pudo editar la contraseña del profesor'
            });
          } else {
            return res.json({
              success: true,
              msg: 'Se ha editado la contraseña correctamente'
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

router.post('/getProfesor', (req, res, next) => {
  let matricula = req.body.matricula;
  Profesor.getProfesorByMatricula(matricula, (err, profesor) => {
    if (err) throw err;
    if (profesor) {
      return res.json({
        success: true,
        profesor: {
          matricula: profesor.matricula,
          nombre: profesor.nombre,
          paterno: profesor.paterno,
          materno: profesor.materno,
          posicion: profesor.posicion,
          telefono: profesor.telefono,
          correo: profesor.correo,
          clases: profesor.clases
        }
      });
    } else {
      return res.json({
        success: false,
        msg: 'No existe un profesor con esa matricula'
      });
    }
  })
});

router.post('/getProfesoresNombre', (req, res, next) => {
  let nombre = req.body.nombre;
  Profesor.getProfesoresByNombre(nombre, (err, profesores) => {
    if (err) throw err;
    if (profesores.length > 0) {
      return res.json({
        success: true,
        profesores
      });
    } else {
      return res.json({
        success: false,
        msg: 'No existe ningun profesor con ese nombre'
      });
    }
  })
});

router.post('/getProfesoresNombreByGroup', (req, res, next) => {
  let nivel = req.body.nivel;
  let grado = req.body.grado;
  let grupo = req.body.grupo;

  Profesor.profesoresClase(nivel, grado, grupo, (err, profesores) => {
    if (err) throw err;
    if (profesores.length > 0) {
      return res.json({
        success: true,
        profesores
      });
    } else {
      return res.json({
        success: false,
        msg: 'No existe ningun profesor con clases en ese grupo'
      });
    }
  })
});

router.post('/addClase', (req, res, next) => {
  let matricula = req.body.matricula;
  let nombreClase = req.body.nombreClase;
  let nivel = req.body.nivel;
  let grado = req.body.grado;
  let grupo = req.body.grupo;

  Profesor.getProfesorByMatricula(matricula, (err, profesor) => {
    if (err) throw err;
    if (!profesor) {
      return res.json({
        success: false,
        msg: 'No se encontro al profesor'
      });
    } else {
      Profesor.claseExistGrupo(matricula, nombreClase, nivel, grado, grupo, (err, clase) => {
        if (err) throw err;
        if (!clase) {
          Profesor.addClase(matricula, nombreClase, nivel, grado, grupo, (err, clase) => {
            if (err) {
              res.json({
                success: false,
                msg: 'No se pudo agregar la clase al profesor'
              });
            } else {
              res.json({
                success: true,
                msg: 'La clase se ha agregado exitosamente'
              });
            }
          });
        } else {
          res.json({
            success: false,
            msg: 'La clase ya existe en el profesor'
          });
        }
      });
    }
  });
});

router.post('/deleteClase', (req, res, next) => {
  let matricula = req.body.matricula;
  let nombreClase = req.body.nombreClase;
  let nivel = req.body.nivel;
  let grado = req.body.grado;
  let grupo = req.body.grupo;

  Profesor.getProfesorByMatricula(matricula, (err, profesor) => {
    if (err) throw err;
    if (!profesor) {
      return res.json({
        success: false,
        msg: 'No se encontro al profesor'
      });
    } else {
      Profesor.claseExist(matricula, nombreClase, (err, clase) => {
        if (err) throw err;
        if (!clase) {
          res.json({
            success: false,
            msg: 'La clase no existe en el profesor'
          });
        } else {
          Profesor.deleteClase(matricula, nombreClase, nivel, grado, grupo, (err, clase) => {
            if (err) {
              res.json({
                success: false,
                msg: 'No se pudo eliminar la clase del profesor'
              });
            } else {
              res.json({
                success: true,
                msg: 'La clase se ha eliminado exitosamente'
              });
            }
          });
        }
      });
    }
  });
});

router.post('/getAllProfesores', (req, res, next) => {
  Profesor.getAllProfesores((err, profesores) => {
    if (err) throw err;
    if (!profesores) {
      return res.json({
        success: false,
        msg: 'No hay profesores'
      });
    } else {
      return res.json({
        success: true,
        profesores
      });
    }
  });
});

module.exports = router;
