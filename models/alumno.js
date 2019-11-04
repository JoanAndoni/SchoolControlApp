const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("../config/database");

const AlumnoSchema = mongoose.Schema({
  /*************** PLATAFORMA 3 ***************/

  permiso: {
    type: Number,
    required: true
  },
  matricula: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },

  /*************** PERSONALES 10 ***************/

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
  curp: {
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
  entidadNacimiento: {
    type: String,
    required: true
  },
  nacionalidad: {
    type: String,
    required: true
  },

  /*************** FISICO 6 ***************/

  sexo: {
    type: String,
    required: true
  },
  peso: {
    type: Number,
    required: true
  },
  estatura: {
    type: Number,
    required: true
  },
  discapacidad: {
    type: String,
    required: true
  },
  lentes: {
    type: String,
    required: true
  },
  grupoSanguineo: {
    type: String,
    required: true
  },

  /*************** DOMICILIO 10 ***************/

  entidad: {
    type: String,
    required: true
  },
  municipio: {
    type: String,
    required: true
  },
  colonia: {
    type: String,
    required: true
  },
  calle: {
    type: String,
    required: true
  },
  numeroExt: {
    type: String,
    required: true
  },
  numeroInt: {
    type: String,
    required: true
  },
  referencia: {
    type: String,
    required: true
  },
  entreCalles: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  cp: {
    type: String,
    required: true
  },

  /*************** CONTACTO ***************/

  email: {
    type: String,
    required: true
  },
  redSocial: {
    type: String,
    required: true
  },

  /*************** PADRE O TUTOR 14 CADA 1 ***************/

  padres: {
    primero: {
      curp: {
        type: String,
        required: true
      },
      nombre: {
        type: String,
        required: true
      },
      sexo: {
        type: String,
        required: true
      },
      fechaNacimiento: {
        type: String,
        required: true
      },
      entidadNacimiento: {
        type: String,
        required: true
      },
      nacionalidad: {
        type: String,
        required: true
      },
      gradoEstudios: {
        type: String,
        required: true
      },
      parentesco: {
        type: String,
        required: true
      },
      ocupacion: {
        type: String,
        required: true
      },
      estadoCivil: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      telefono: {
        type: String,
        required: true
      },
      celular: {
        type: String,
        required: true
      },
      redSocial: {
        type: String,
        required: true
      }
    },
    segundo: {
      curp: {
        type: String,
        required: true
      },
      nombre: {
        type: String,
        required: true
      },
      sexo: {
        type: String,
        required: true
      },
      fechaNacimiento: {
        type: String,
        required: true
      },
      entidadNacimiento: {
        type: String,
        required: true
      },
      nacionalidad: {
        type: String,
        required: true
      },
      gradoEstudios: {
        type: String,
        required: true
      },
      parentesco: {
        type: String,
        required: true
      },
      ocupacion: {
        type: String,
        required: true
      },
      estadoCivil: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      telefono: {
        type: String,
        required: true
      },
      celular: {
        type: String,
        required: true
      },
      redSocial: {
        type: String,
        required: true
      }
    }
  },

  /*************** EXTRAS ***************/

  materias: [
    {
      nombreMateria: {
        type: String
      },
      profesor: {
        type: String
      },
      calificaciones: [Number]
    }
  ],
  comentarios: [
    {
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
    }
  ]
});

// Create alumno / Use this from outside / Send it to the mongoDB
const Alumno = (module.exports = mongoose.model("Alumno", AlumnoSchema));

module.exports.getAlumnoById = function(id, callback) {
  Alumno.findById(id, callback);
};

// Make the query and bring one alumno by the matricula from the DB
module.exports.getAlumnoByMatricula = function(matricula, callback) {
  const query = {
    matricula: matricula
  };
  Alumno.findOne(query, callback);
};

// Make the query and bring one alumno by the matricula from the DB
module.exports.getAlumnosByNombre = function(nombre, callback) {
  const query = {
    nombre: nombre
  };
  Alumno.find(
    query,
    null,
    {
      sort: {
        paterno: 1
      }
    },
    callback
  );
};

module.exports.alumnosClase = function(nivel, grado, grupo, callback) {
  const query = {
    nivel: nivel,
    grado: grado,
    grupo: grupo
  };

  Alumno.find(
    query,
    null,
    {
      sort: {
        nombre: 1
      }
    },
    callback
  );
};

module.exports.addAlumno = function(newAlumno, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newAlumno.password, salt, (err, hash) => {
      if (err) throw err;
      newAlumno.password = hash;
      newAlumno.save(callback);
    });
  });
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) console.log(err);
    callback(null, isMatch);
  });
};

module.exports.deleteAlumno = function(matricula, callback) {
  const query = {
    matricula: matricula
  };
  Alumno.findOneAndRemove(query, callback);
};

module.exports.addMateria = function(
  matricula,
  nombreMateria,
  profesor,
  callback
) {
  const materia = {
    nombreMateria: nombreMateria,
    profesor: profesor,
    calificaciones: [0, 0, 0]
  };

  Alumno.updateOne(
    {
      matricula: matricula
    },
    {
      $push: {
        materias: materia
      }
    },
    callback
  );
};

module.exports.materiaExist = function(matricula, nombreMateria, callback) {
  const query = {
    matricula: matricula,
    materias: {
      $elemMatch: {
        nombreMateria: nombreMateria
      }
    }
  };
  Alumno.findOne(query, callback);
};

module.exports.deleteMateria = function(matricula, nombreMateria, callback) {
  const query = {
    $pull: {
      materias: {
        nombreMateria: nombreMateria
      }
    }
  };
  Alumno.updateOne({ matricula: matricula }, query, callback);
};

module.exports.updateCalificaciones = function(
  matricula,
  nombreMateria,
  calificaciones,
  callback
) {
  Alumno.updateOne(
    {
      matricula: matricula,
      "materias.nombreMateria": nombreMateria
    },
    {
      $set: {
        "materias.$.calificaciones": calificaciones
      }
    },
    callback
  );
};

module.exports.addComentario = function(
  matricula,
  profesor,
  materia,
  fecha,
  titulo,
  texto,
  callback
) {
  const comentario = {
    profesor: profesor,
    materia: materia,
    fecha: fecha,
    titulo: titulo,
    texto: texto
  };

  Alumno.updateOne(
    {
      matricula: matricula
    },
    {
      $push: {
        comentarios: comentario
      }
    },
    callback
  );
};

module.exports.comentarioExist = function(matricula, titulo, callback) {
  const query = {
    matricula: matricula,
    comentarios: {
      $elemMatch: {
        titulo: titulo
      }
    }
  };
  Alumno.findOne(query, callback);
};

module.exports.deleteComentario = function(matricula, titulo, callback) {
  const query = {
    matricula: matricula,
    $pull: {
      comentarios: {
        titulo: titulo
      }
    }
  };
  Alumno.updateOne(query, callback);
};

module.exports.editComentario = function(matricula, titulo, texto, callback) {
  Alumno.updateOne(
    {
      matricula: matricula,
      "comentarios.titulo": titulo
    },
    {
      $set: {
        "comentarios.$.texto": texto
      }
    },
    callback
  );
};

module.exports.getAlumnosByGrupo = function(
  nivel,
  grado,
  grupo,
  nombreMateria,
  profesor,
  callback
) {
  const query = {
    nivel: nivel,
    grado: grado,
    grupo: grupo,
    materias: {
      $elemMatch: {
        nombreMateria: nombreMateria,
        profesor: profesor
      }
    }
  };
  Alumno.find(
    query,
    null,
    {
      sort: {
        nombre: 1
      }
    },
    callback
  );
};

module.exports.editPassword = function(matricula, newPassword, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newPassword, salt, (err, hash) => {
      if (err) console.log(err);
      const query = {
        matricula: matricula
      };
      Alumno.updateOne(
        query,
        {
          password: hash
        },
        callback
      );
    });
  });
};

module.exports.editGrupoAlumno = function(
  matricula,
  nivel,
  grado,
  grupo,
  callback
) {
  const query = {
    matricula: matricula
  };

  Alumno.updateOne(
    query,
    {
      nivel: nivel,
      grado: grado,
      grupo: grupo,
      materias: [],
      comentarios: []
    },
    callback
  );
};

module.exports.editAlumno = function(matricula, alumno, callback) {
  const query = {
    matricula: matricula
  };

  const newDataAlumno = {
    nombre: alumno.nombre,
    paterno: alumno.paterno,
    materno: alumno.materno,
    curp: alumno.curp,
    fechaNacimiento: alumno.fechaNacimiento,
    entidadNacimiento: alumno.entidadNacimiento,
    nacionalidad: alumno.nacionalidad,

    sexo: alumno.sexo,
    peso: alumno.peso,
    estatura: alumno.estatura,
    discapacidad: alumno.discapacidad,
    lentes: alumno.lentes,
    grupoSanguineo: alumno.grupoSanguineo,

    entidad: alumno.entidad,
    municipio: alumno.municipio,
    colonia: alumno.colonia,
    calle: alumno.calle,
    numeroExt: alumno.numeroExt,
    numeroInt: alumno.numeroInt,
    referencia: alumno.referencia,
    entreCalles: alumno.entreCalles,
    telefono: alumno.telefono,
    cp: alumno.cp,

    email: alumno.email,
    redSocial: alumno.redSocial,

    padres: alumno.padres
  };

  Alumno.updateOne(query, newDataAlumno, callback);
};
