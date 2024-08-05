// config/db.js
const mongoose = require('mongoose');

const DB = 'mongodb+srv://manianil8423:Anil&2000@cluster0.p4pyoxg.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // Add this option as well
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
