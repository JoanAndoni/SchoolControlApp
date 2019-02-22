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

module.exports.addAdmin = function(admin, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(admin.password, salt, (err, hash) => {
      if (err) throw err;
      admin.password = hash;
      admin.save(callback);
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
  Admin.find(callback);
}
