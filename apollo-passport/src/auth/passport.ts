import passport from 'passport';
import { Strategy, VerifyFunction } from 'passport-local';

const DUMMY_USER_ID = 'id';
const DUMMY_PASSWORD = 'pw';

const passportConfig = { usernameField: 'userId', passwordField: 'password' };

const passportVerify: VerifyFunction = (userId, password, done) => {
  console.log(userId, password);
  if (userId === DUMMY_USER_ID && password === DUMMY_PASSWORD) {
    done(null, { result: true });
    return;
  }
  done(null, false, { message: 'fail' });
};

export default () => {
  passport.use('local', new Strategy(passportConfig, passportVerify));
};
