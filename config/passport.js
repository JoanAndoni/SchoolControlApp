// Documentation in http://www.passportjs.org/packages/passport-jwt/
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Alumno = require('../models/alumno');
const Profesor = require('../models/profesor');
const Admin = require('../models/admin');
const config = require('../config/database');

module.exports = function(passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    // console.log(jwt_payload.permiso);
    if (jwt_payload.permiso == 0) {
      Alumno.getAlumnoById(jwt_payload._id, (err, alumno) => {
        if (err) {
          return done(err, false);
        }
        if (alumno) {
          return done(null, alumno);
        } else {
          return done(null, false);
        }
      });
    } else if (jwt_payload.permiso == 1) {
      Profesor.getProfesorById(jwt_payload._id, (err, profesor) => {
        if (err) {
          return done(err, false);
        }
        if (profesor) {
          return done(null, profesor);
        } else {
          return done(null, false);
        }
      });
    } else {
      Admin.getAdminById(jwt_payload._id, (err, admin) => {
        if (err) {
          return done(err, false);
        }
        if (admin) {
          return done(null, admin);
        } else {
          return done(null, false);
        }
      });
    }
  }));
}
