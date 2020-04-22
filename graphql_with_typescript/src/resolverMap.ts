import { IResolvers } from 'graphql-tools';

import User from './sequelize/models/user';

const resolverMap: IResolvers = {
  Query: {
    user: () => {
      return 'test';
    },
  },
  Mutation: {
    createUser: (_, args) => {
      const user = User.create({
        name: args.name,
        gender: args.gender,
      });
      return user;
    },
  },
};

export default resolverMap;
