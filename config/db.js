const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.DATABASE;

exports.connect = () => {
  mongoose
      .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('Successfully connected to Database ');
      })
      .catch((error) => {
        console.log(`Can not connect to Database, ${error}`);
      });
};
