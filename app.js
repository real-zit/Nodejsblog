const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoute = require('./routes/blogRoutes');
require('dotenv').config();
const port = process.env.PORT || 4000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const dburi = process.env.DB_URI;
async function connect() {
  try {
    mongoose.connect(dburi, {});
    console.log('connected to db');
  } catch (err) {
    console.log(err);
  }
}
connect();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

app.use('/', blogRoute);

app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

app.listen(port, () => {
  console.log('listening to the port');
});
