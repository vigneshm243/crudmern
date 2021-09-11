const mongoose = require('mongoose')
const dbConfig = require('./dbConfig');


const connectDB = async () => {
  try {
    await mongoose.connect(dbConfig.url, {
      useNewUrlParser: true
    });


    console.log('MongoDB is Connected...');

  }
  catch (err) {
    console.log("Error", err.stack);
    console.log("Error", err.name);
    console.log("Error", err.message);
    console.log('error connecting to the database');
    process.exit();
  };
}

module.exports = connectDB;