import { IResolvers } from 'graphql-tools';

import User from './sequelize/models/user';

const resolverMap: IResolvers = {
  Query: {
    user: async (_, args) => {
      const user = await User.findOne({
        where: args,
      });
      return user;
    },
  },
  Mutation: {
    createUser: async (_, args) => {
      const user = await User.create({
        name: args.name,
        gender: args.gender,
      });
      return user;
    },
    updateUser: async (_, args) => {
      const data: { name?: string; gender?: string } = {};

      data.name = args.name;
      data.gender = args.gender;

      await User.update(data, { where: { id: args.id } });
      const user = await User.findOne({ where: { id: args.id } });
      return user;
    },
  },
};

export default resolverMap;
