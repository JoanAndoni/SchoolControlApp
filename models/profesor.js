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
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  clases: [{
    nombreClase: {
      type: String
    },
    nivel: {
      type: String
    },
    grado: {
      type: String
    },
    grupo: {
      type: String
    }
  }]
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

// Make the query and bring one alumno by the matricula from the DB
module.exports.getProfesoresByNombre = function(nombre, paterno, callback) {
  const query = {
    nombre: nombre,
    paterno: paterno
  }

  Profesor.find(query, null, {
    sort: {
      paterno: 1
    }
  }, callback);
}

module.exports.editPassword = function(matricula, newPassword, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newPassword, salt, (err, hash) => {
      if (err) console.log(err);
      const query = {
        matricula: matricula,
      }
      Profesor.updateOne(query, {
        password: hash
      }, callback);
    });
  });
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

module.exports.addClase = function(matricula, nombreClase, nivel, grado, grupo, callback) {
  const clase = {
    nombreClase: nombreClase,
    nivel: nivel,
    grado: grado,
    grupo: grupo
  }

  Profesor.updateOne({
      matricula: matricula
    }, {
      $push: {
        clases: clase
      }
    },
    callback);
}

module.exports.claseExist = function(matricula, nombreClase, callback) {
  const query = {
    matricula: matricula,
    clases: {
      $elemMatch: {
        nombreClase: nombreClase
      }
    }
  }
  Profesor.findOne(query, callback);
}

module.exports.claseExistGrupo = function(matricula, nombreClase, nivel, grado, grupo, callback) {
  const query = {
    matricula: matricula,
    clases: {
      $elemMatch: {
        nombreClase: nombreClase,
        nivel: nivel,
        grado: grado,
        grupo: grupo
      }
    }
  }
  Profesor.findOne(query, callback);
}

module.exports.deleteClase = function(matricula, nombreClase, nivel, grado, grupo, callback) {
  const filter = {
    matricula: matricula
  }
  const update = {
    $pull: {
      clases: {
        nombreClase: nombreClase,
        nivel: nivel,
        grado: grado,
        grupo: grupo
      }
    }
  }
  Profesor.updateOne(filter, update, callback);
}

module.exports.profesoresClase = function(nivel, grado, grupo, callback) {
  Profesor.aggregate([{
    "$unwind": "$clases"
  }, {
    "$match": {
      "clases.nivel": nivel,
      "clases.grado": grado,
      "clases.grupo": grupo
    }
  }, {
    "$group": {
      _id: "$nombre",
      clases: {
        $push: "$clases"
      }
    }
  }], callback);
}

module.exports.getAllProfesores = function(callback) {
  Profesor.find({}, null, {
    sort: {
      nombre: 1
    }
  }, callback);
}
