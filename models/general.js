const mongoose = require('mongoose');
const config = require('../config/database');

const GeneralSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  comunicados: [{
    fecha: {
      type: String
    },
    titulo: {
      type: String
    },
    texto: {
      type: String
    }
  }]
});

const General = module.exports = mongoose.model('General', GeneralSchema);

module.exports.addSchool = function(admin, callback) {
  admin.save(callback);
}

module.exports.getSchool = function(callback) {
  General.find(callback);
}

module.exports.addComunicado = function(fecha, titulo, texto, callback) {
  const comunicado = {
    fecha: fecha,
    titulo: titulo,
    texto: texto
  }

  General.updateMany({}, {
      $push: {
        comunicados: comunicado
      }
    },
    callback);
}

module.exports.comunicadoExist = function(titulo, callback) {
  const query = {
    comunicados: {
      $elemMatch: {
        titulo: titulo
      }
    }
  }

  General.findOne(query, callback);
}

module.exports.editComunicado = function(titulo, texto, callback) {
  General.updateMany({
    "comunicados.titulo": titulo
  }, {
    $set: {
      "comunicados.$.texto": texto
    }
  }, callback);
}

module.exports.deleteComunicado = function(titulo, callback) {
  const query = {
    $pull: {
      comunicados: {
        titulo: titulo
      }
    }
  }
  General.updateMany(query, callback);
}
