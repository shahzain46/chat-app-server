const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');

const app = express();

//DB_CONFIG
const db = require('./config/keys').MongoURI;

//Connect to Mongo
//Returns a Promise
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Mongo Db Connected!!'))
  .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//BodyParser
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server Started on port ${PORT}`));
