const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const ProfesorSchema = mongoose.Schema({
  permiso: {
    type: Number,
    required: true
  },
  matricula: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  paterno: {
    type: String,
    required: true
  },
  materno: {
    type: String,
    required: true
  },
  posicion: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create alumno / Use this from outside / Send it to the mongoDB
const Profesor = module.exports = mongoose.model('Profesores', ProfesorSchema);

module.exports.getProfesorById = function(id, callback) {
  Profesor.findById(id, callback);
}

// Make the query and bring one alumno by the matricula from the DB
module.exports.getProfesorByMatricula = function(matricula, callback) {
  const query = {
    matricula: matricula
  }
  Profesor.findOne(query, callback);
}

module.exports.addProfesor = function(newProfesor, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newProfesor.password, salt, (err, hash) => {
      if (err) throw err;
      newProfesor.password = hash;
      newProfesor.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
}

module.exports.deleteProfesor = function(matricula, callback) {
  const query = {
    matricula: matricula
  }
  Profesor.findOneAndRemove(query, callback);
}
