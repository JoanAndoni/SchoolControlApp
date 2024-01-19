const mongoose = require('mongoose');
const config = require('../config/database');

const GeneralSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  shortName: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  matriculas: {
    type: Number,
    required: true,
  },
  matriculasProfesores: {
    type: Number,
    required: true,
  },
  comunicados: [
    {
      fecha: {
        type: String,
      },
      titulo: {
        type: String,
      },
      texto: {
        type: String,
      },
    },
  ],
});

const General = (module.exports = mongoose.model('General', GeneralSchema));

module.exports.addSchool = function (admin, callback) {
  admin.save(callback);
};

module.exports.getSchool = function (callback) {
  General.find(callback);
};

module.exports.getSchoolByName = function (name, callback) {
  const query = {
    name: name,
  };
  General.findOne(query, callback);
};

module.exports.getMatriculas = function (callback) {
  General.find({}, { matriculas: 1 }, callback);
};

module.exports.getMatriculasProfesores = function (callback) {
  General.find({}, { matriculasProfesores: 1 }, callback);
};

module.exports.addComunicado = function (fecha, titulo, texto, callback) {
  const comunicado = {
    fecha: fecha,
    titulo: titulo,
    texto: texto,
  };

  General.updateMany(
    {},
    {
      $push: {
        comunicados: comunicado,
      },
    },
    callback
  );
};

module.exports.comunicadoExist = function (titulo, callback) {
  const query = {
    comunicados: {
      $elemMatch: {
        titulo: titulo,
      },
    },
  };

  General.findOne(query, callback);
};

module.exports.editComunicado = function (titulo, texto, fecha, callback) {
  General.updateMany(
    {
      'comunicados.titulo': titulo,
    },
    {
      $set: {
        'comunicados.$.texto': texto,
        'comunicados.$.fecha': fecha,
      },
    },
    callback
  );
};

module.exports.updateMatriculas = function (matr, callback) {
  General.updateMany({}, { matriculas: matr }, callback);
};

module.exports.updateMatriculasProfesores = function (matr, callback) {
  General.updateMany({}, { matriculasProfesores: matr }, callback);
};

module.exports.deleteComunicado = function (titulo, callback) {
  const query = {
    $pull: {
      comunicados: {
        titulo: titulo,
      },
    },
  };
  General.updateMany(query, callback);
};
