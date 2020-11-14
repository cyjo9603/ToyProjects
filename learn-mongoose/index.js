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
      const User = require('./schema/user');
      User.create({
        email: 'test@test.com',
        password: 'testpassword',
        nickname: 'chanyeong',
        image: { width: 100, height: 100 },
        likes: [],
        any: [],
      });
    })
    .catch((err) => {
      console.error(err);
    });
}

connect();
mongoose.connection.on('disconnected', connect);
require('./schema/user');
