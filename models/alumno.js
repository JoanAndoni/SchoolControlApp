const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const AlumnoSchema = mongoose.Schema({
  permiso: {
    type: Number,
    required: true
  },
  matricula: {
    type: String,
    required: true
  },
  curp: {
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
  nivel: {
    type: String,
    required: true
  },
  grado: {
    type: String,
    required: true
  },
  grupo: {
    type: String,
    required: true
  },
  fechaNacimiento: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Create alumno / Use this from outside / Send it to the mongoDB
const Alumno = module.exports = mongoose.model('Alumno', AlumnoSchema);

module.exports.getAlumnoById = function(id, callback) {
  Alumno.findById(id, callback);
}

// Make the query and bring one alumno by the matricula from the DB
module.exports.getAlumnoByMatricula = function(matricula, callback) {
  const query = {
    matricula: matricula
  }
  Alumno.findOne(query, callback);
}

module.exports.addAlumno = function(newAlumno, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newAlumno.password, salt, (err, hash) => {
      if (err) throw err;
      newAlumno.password = hash;
      newAlumno.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
}

module.exports.deleteAlumno = function(matricula, callback) {
  const query = {
    matricula: matricula
  }
  Alumno.findOneAndRemove(query, callback);
}
