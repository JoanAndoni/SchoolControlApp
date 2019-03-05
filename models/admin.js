const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const AdminSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  comentarios: [{
    matricula: {
      type: String
    },
    profesor: {
      type: String
    },
    materia: {
      type: String
    },
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

const Admin = module.exports = mongoose.model('Admin', AdminSchema);

module.exports.getAdminById = function(id, callback) {
  Admin.findById(id, callback);
}

module.exports.getAdminByUsername = function(username, callback) {
  const query = {
    username: username
  }
  Admin.findOne(query, callback);
}

module.exports.addAdmin = function(admin, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(admin.password, salt, (err, hash) => {
      if (err) console.log(err);
      admin.password = hash;
      admin.save(callback);
    });
  });
}

module.exports.editPassword = function(username, newPassword, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newPassword, salt, (err, hash) => {
      if (err) console.log(err);
      const query = {
        username: username,
      }
      Admin.updateOne(query, {
        password: hash
      }, callback);
    });
  });
}

module.exports.deleteAdmin = function(username, callback) {
  const query = {
    username: username
  }
  Admin.findOneAndRemove(query, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
}

module.exports.getAllAdmins = function(callback) {
  Admin.find({}, null, {
    sort: {
      username: 1
    }
  }, callback);
}

module.exports.addComentario = function(matriculaAlumno, profesor, materia, titulo, texto, callback) {
  const comentario = {
    matricula: matriculaAlumno,
    profesor: profesor,
    materia: materia,
    titulo: titulo,
    texto: texto
  }

  Admin.updateMany({}, {
      $push: {
        comentarios: comentario
      }
    },
    callback);
}

module.exports.comentarioExist = function(matriculaAlumno, titulo, callback) {
  const query = {
    comentarios: {
      $elemMatch: {
        matricula: matriculaAlumno,
        titulo: titulo
      }
    }
  }
  Admin.findOne(query, callback);
}

module.exports.editComentario = function(matricula, titulo, texto, callback) {
  Admin.updateMany({
    "comentarios.matricula": matricula,
    "comentarios.titulo": titulo
  }, {
    $set: {
      "comentarios.$.texto": texto
    }
  }, callback);
}

module.exports.deleteComentario = function(matriculaAlumno, titulo, callback) {
  const query = {
    $pull: {
      comentarios: {
        matricula: matriculaAlumno,
        titulo: titulo
      }
    }
  }
  Admin.updateMany(query, callback);
}
