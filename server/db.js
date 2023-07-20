const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI;
console.log("MONGODB_URI available:", !!MONGODB_URI, "NODE_ENV=", process.env.NODE_ENV)

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas database.');
});

module.exports = db;