const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  width: Number,
  height: Number,
});

module.exports = imageSchema;
