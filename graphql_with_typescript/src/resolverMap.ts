import { IResolvers } from 'graphql-tools';
import bcrypt from 'bcrypt';

import User from './sequelize/models/user';

const resolverMap: IResolvers = {
  Query: {
    user: async (_, args) => {
      const user = await User.findOne({
        where: args,
        include: [
          {
            model: User,
            as: 'Friends',
          },
        ],
      });
      console.log(user.dataValues);
      return user;
    },
  },
  Mutation: {
    createUser: async (_, args) => {
      const hashedPassword = await bcrypt.hash(args.password, 12);

      const user = await User.create({
        name: args.name,
        password: hashedPassword,
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
    addFriend: async (_, args) => {
      const user = await User.findOne({ where: { id: args.id } });
      await user.addFriend(args.targetId);
      return args.targetId;
    },
  },
};

export default resolverMap;
