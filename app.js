// Make the comunication with a server to create petitions
const express = require('express');
// Make the paths for the paths to create the petitions
const path = require('path');
// Parses the information in the body of petitions
const bodyParser = require('body-parser');
// Cross-Origin Resource Sharing needed for express to get headers
const cors = require('cors');
// Strategy for authenticating with a JSON Web Token.
const passport = require('passport');
// MongoDB object modeling tool designed to work in an asynchronous environment.
const mongoose = require('mongoose');
// Configuration of the database
const config = require('./config/database');
// Configuration of the mail sending
// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = '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';
sgMail.setApiKey(SENDGRID_API_KEY);
const msg = {
  to: 'mcr_joan@hotmail.com',
  from: 'dchrua@gmail.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
console.log(msg);
sgMail.send(msg);

// Connect to the database
mongoose.connect(config.database, {
  useNewUrlParser: true
});

// Connect to the database and log out if it was successful
mongoose.connection.on('connected', () => {
  console.log('Connected to the database ' + config.database);
});

// Logout if the connect was failed
mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});

// Start our server app to make the petitions
const app = express();

// get all the routes for make the petitions in the backend
const alumnos = require('./routes/alumnos');
const profesores = require('./routes/profesores');
const admins = require('./routes/admins');

// Port Number
const port = 3000;

// CORS Middleware its for make the routes to create the petitions
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware to grab the data that we send or recive
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/alumnos', alumnos);
app.use('/profesores', profesores);
app.use('/admin', admins);

// Index Route / show as invalid end point
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start Server on the port setted
app.listen(port, () => {
  console.log('Server started on port ' + port);
});
