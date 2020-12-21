import passport from 'passport';

import { Resolvers } from '@gql-types/api';

const resolvers: Resolvers = {
  Mutation: {
    login: async (_, { userId, password }, { req, res }) => {
      req.body.userId = userId;
      req.body.password = password;

      console.log(
        await passport.authenticate('local', (error, user, info) => {
          console.log(error, user, info);
          if (error || !user) {
            throw new Error('passport error');
          }

          req.logIn(user, { session: false }, (loginError) => {
            if (loginError) {
              throw loginError;
            }
          });

          res.cookie('secretkey', 'token');

          console.log('success');
        })(req, res)
      );
      return { result: true };
    },
  },
};

export default resolvers;
