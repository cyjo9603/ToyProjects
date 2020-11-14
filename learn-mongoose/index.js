const mongoose = require('mongoose');

function connect() {
  mongoose
    .connect('mongodb://127.0.0.1:27017/test', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to mongodb');
    })
    .catch((err) => {
      console.error(err);
    });
}

connect();
mongoose.connection.on('disconnected', connect);
require('./schema/user');
