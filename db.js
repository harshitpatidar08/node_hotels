
const mongoose = require("mongoose");

// MongoDB connection URL
const mongoUrl = 'mongodb://localhost:27017/hotels'; // replace 'hotels' with your database name

// Setup MongoDB connection
mongoose.connect(mongoUrl)
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
