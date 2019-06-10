const express = require('express');
const config = require('../config/database');
const General = require('../models/general');
const router = express.Router();

router.post('/register', (req, res, next) => {
  let newSchool = new General({
    name: req.body.name
  });

  const name = req.body.name;

  General.getSchoolByName(name, (err, school) => {
    if (school) {
      res.json({
        success: false,
        msg: 'Ya existe una escuela con ese nombre'
      });
    } else {
      // Add the user to the db
      General.addSchool(newSchool, (err, school) => {
        if (err) {
          res.json({
            success: false,
            msg: 'No se ha podido crear la escuela'
          });
        } else {
          res.json({
            success: true,
            msg: 'La escuela se creo exitosamente'
          });
        }
      });
    }
  });
});

router.post('/getSchool', (req, res, next) => {
  General.getSchool((err, school) => {
    if (err) {
      res.json({
        success: false,
        msg: 'No se ha podido crear la escuela'
      });
    } else {
      res.json({
        success: true,
        escuela: school[0]
      });
    }
  });

});

router.post('/addComunicado', (req, res, next) => {
  let fecha = req.body.fecha;
  let titulo = req.body.titulo;
  let texto = req.body.texto;

  General.comunicadoExist(titulo, (err, comentario) => {
    if (err) throw err;
    if (!comentario) {
      General.addComunicado(fecha, titulo, texto, (err, comunicado) => {
        if (err) {
          res.json({
            success: false,
            msg: 'No se pudo agregar el comunicado a la base de datos'
          });
        } else {
          res.json({
            success: true,
            msg: 'El comunicado se ha registrado en la base de datos exitosamente'
          });
        }
      });

    } else {
      res.json({
        success: false,
        msg: 'El comunicado con ese titulo ya existe en la base de datos'
      });
    }
  });
});

router.post('/editComunicado', (req, res, next) => {
  let titulo = req.body.titulo;
  let texto = req.body.texto;

  General.comunicadoExist(titulo, (err, comunicado) => {
    if (err) throw err;
    if (comunicado) {
      General.editComunicado(titulo, texto, (err, comunicado) => {
        if (err) {
          res.json({
            success: false,
            msg: 'No se pudo editar el comunicado'
          });
        } else {
          res.json({
            success: true,
            msg: 'El comunicado se ha editado exitosamente'
          });
        }
      });
    } else {
      res.json({
        success: false,
        msg: 'El comunicado no existe en la base de datos'
      });
    }
  });
});

router.post('/deleteComunicado', (req, res, next) => {
  let titulo = req.body.titulo;

  General.comunicadoExist(titulo, (err, comunicado) => {
    if (err) throw err;
    if (!comunicado) {
      res.json({
        success: false,
        msg: 'El comunicado no existe'
      });
    } else {
      General.deleteComunicado(titulo, (err, comunicado) => {
        if (err) {
          res.json({
            success: false,
            msg: 'No se pudo eliminar el comunicado'
          });
        } else {
          res.json({
            success: true,
            msg: 'El comunicado se ha eliminado exitosamente'
          });
        }
      });
    }
  });
});

// Router module for make the petitions
module.exports = router;
