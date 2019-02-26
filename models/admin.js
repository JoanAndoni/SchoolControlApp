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
