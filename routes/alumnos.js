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
            fechaNacimiento: alumno.fechaNacimiento,
            materias: alumno.materias,
            comentarios: alumno.comentarios
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

router.post('/addMateria', (req, res, next) => {
  let matricula = req.body.matricula;
  let nombreMateria = req.body.nombreMateria;

  Alumno.getAlumnoByMatricula(matricula, (err, alumno) => {
    if (err) throw err;
    if (!alumno) {
      return res.json({
        success: false,
        msg: 'No se encontro al alumno'
      });
    } else {
      Alumno.materiaExist(matricula, nombreMateria, (err, materia) => {
        if (err) throw err;
        if (!materia) {
          Alumno.addMateria(matricula, nombreMateria, (err, alumno) => {
            if (err) {
              res.json({
                success: false,
                msg: 'No se pudo agregar la materia al alumno'
              });
            } else {
              res.json({
                success: true,
                msg: 'La materia se ha agregado exitosamente'
              });
            }
          });
        } else {
          res.json({
            success: false,
            msg: 'La materia ya existe en el alumno'
          });
        }
      });
    }
  });
});

router.post('/deleteMateria', (req, res, next) => {
  let matricula = req.body.matricula;
  let nombreMateria = req.body.nombreMateria;

  Alumno.getAlumnoByMatricula(matricula, (err, alumno) => {
    if (err) throw err;
    if (!alumno) {
      return res.json({
        success: false,
        msg: 'No se encontro al alumno'
      });
    } else {
      Alumno.materiaExist(matricula, nombreMateria, (err, materia) => {
        if (err) throw err;
        if (!materia) {
          res.json({
            success: false,
            msg: 'La materia no existe en el alumno'
          });
        } else {
          Alumno.deleteMateria(matricula, nombreMateria, (err, alumno) => {
            if (err) {
              res.json({
                success: false,
                msg: 'No se pudo eliminar la materia del alumno'
              });
            } else {
              res.json({
                success: true,
                msg: 'La materia se ha eliminado exitosamente'
              });
            }
          });

        }
      });
    }
  });
});

router.post('/updateCalificaciones', (req, res, next) => {
  let matricula = req.body.matricula;
  let nombreMateria = req.body.nombreMateria;
  let calificaciones = req.body.calificaciones;

  Alumno.getAlumnoByMatricula(matricula, (err, alumno) => {
    if (err) throw err;
    if (!alumno) {
      return res.json({
        success: false,
        msg: 'No se encontro al alumno'
      });
    } else {
      Alumno.materiaExist(matricula, nombreMateria, (err, materia) => {
        if (err) throw err;
        if (!materia) {
          res.json({
            success: false,
            msg: 'La materia no existe en el alumno'
          });
        } else {
          Alumno.updateCalificaciones(matricula, nombreMateria, calificaciones, (err, alumno) => {
            if (err) {
              res.json({
                success: false,
                msg: 'No se pudieron actualizar las calificaciones de la materia del alumno'
              });
            } else {
              res.json({
                success: true,
                msg: 'Las calificaciones de la materia se han actualizado exitosamente'
              });
            }
          });
        }
      });
    }
  });
});

router.post('/addComentario', (req, res, next) => {
  let matricula = req.body.matricula;
  let profesor = req.body.profesor;
  let titulo = req.body.titulo;
  let texto = req.body.texto;

  Alumno.getAlumnoByMatricula(matricula, (err, alumno) => {
    if (err) throw err;
    if (!alumno) {
      return res.json({
        success: false,
        msg: 'No se encontro al alumno'
      });
    } else {
      Alumno.comentarioExist(matricula, titulo, (err, comentario) => {
        if (err) throw err;
        if (!comentario) {
          Alumno.addComentario(matricula, profesor, titulo, texto, (err, comentario) => {
            if (err) {
              res.json({
                success: false,
                msg: 'No se agregar comentario al alumno'
              });
            } else {
              res.json({
                success: true,
                msg: 'El comentario se ha agregado exitosamente'
              });
            }
          });
        } else {
          res.json({
            success: false,
            msg: 'El comentario con ese titulo ya existe en el alumno'
          });
        }
      });
    }
  });
});

router.post('/deleteComentario', (req, res, next) => {
  let matricula = req.body.matricula;
  let titulo = req.body.titulo;

  Alumno.getAlumnoByMatricula(matricula, (err, alumno) => {
    if (err) throw err;
    if (!alumno) {
      return res.json({
        success: false,
        msg: 'No se encontro al alumno'
      });
    } else {
      Alumno.comentarioExist(matricula, titulo, (err, comentario) => {
        if (err) throw err;
        if (!comentario) {
          res.json({
            success: false,
            msg: 'El comentario no existe en el alumno'
          });
        } else {
          Alumno.deleteComentario(matricula, titulo, (err, comentario) => {
            if (err) {
              res.json({
                success: false,
                msg: 'No se pudo eliminar comentario del alumno'
              });
            } else {
              res.json({
                success: true,
                msg: 'El comentario se ha eliminado exitosamente'
              });
            }
          });

        }
      });
    }
  });
});

module.exports = router;
