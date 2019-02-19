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
  }
});

// Create user / Use this from outside / Send it to the mongoDB
const Admin = module.exports = mongoose.model('Admin', AdminSchema);

module.exports.getAdminById = function(id, callback) {
  Admin.findById(id, callback);
}

// Make the query and bring one user by the username from the DB
module.exports.getAdminByUsername = function(username, callback) {
  const query = {
    username: username
  }
  Admin.findOne(query, callback);
}

module.exports.addAdmin = function(newAdmin, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newAdmin.password, salt, (err, hash) => {
      if (err) throw err;
      newAdmin.password = hash;
      newAdmin.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
}
