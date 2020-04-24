import { IResolvers } from 'graphql-tools';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import User from './sequelize/models/user';

dotenv.config();

const resolverMap: IResolvers = {
  Query: {
    user: async (_, args, context) => {
      const user = await User.findOne({
        where: { id: context.id },
        include: [
          {
            model: User,
            as: 'Friends',
          },
        ],
      });
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
    updateUser: async (_, args, context) => {
      const data: { name?: string; gender?: string } = {};

      data.name = args.name;
      data.gender = args.gender;

      await User.update(data, { where: { id: context.id } });
      const user = await User.findOne({ where: { id: context.id } });
      return user;
    },
    addFriend: async (_, args) => {
      const user = await User.findOne({ where: { id: args.id } });
      await user.addFriend(args.targetId);
      return args.targetId;
    },
    signin: async (_, args) => {
      const user = await User.findOne({
        where: {
          name: args.name,
        },
      });
      const match = await bcrypt.compare(args.password, user.password);
      if (!match) {
        return 0;
      }
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY!);
      return { token, user };
    },
  },
};

export default resolverMap;
