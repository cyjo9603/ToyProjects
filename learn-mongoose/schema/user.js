const mongoose = require('mongoose');

const imageSchema = require('./image');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true, trim: true },
  nickname: String,
  birth: { type: Date, default: Date.now },
  point: { type: Number, default: 0, max: 50, index: true },
  image: imageSchema,
  likes: [String],
  any: [mongoose.Schema.Types.Mixed],
  id: mongoose.Schema.Types.ObjectId,
});

userSchema.index({ email: 1, nickname: 1 });

module.exports = mongoose.model('User', userSchema);
