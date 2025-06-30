
const mongoose = require("mongoose");
require('dotenv').config();

// MongoDB connection URL
//const mongoURL = process.env.MONGODB_URL_LOCAL
 const mongoURL = process.env.MONGODB_URL;

// Setup MongoDB connection
mongoose.connect(mongoURL)
  .then(() => {
    console.log('Connected to MongoDB server');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Get the default connection
const db = mongoose.connection;

db.on('disconnected', () => {
    console.log('MongoDB server disconnected');
});

// Export the database connection
module.exports = db;
