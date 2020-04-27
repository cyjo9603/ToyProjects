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
      const refreshToken = jwt.sign(
        {
          id: user.id,
          type: 'REFRESH',
          exp: new Date().getTime() + 1000 * 60 * 60 * 24,
        },
        process.env.JWT_SECRET_KEY!,
      );
      const accessToken = jwt.sign(
        {
          id: user.id,
          type: 'ACCESS',
          exp: new Date().getTime() + 1000 * 60 * 30,
        },
        process.env.JWT_SECRET_KEY!,
      );

      await user.update({ refreshToken });

      return { refreshToken, accessToken, user };
    },
    issueAccessToken: async (_, args) => {
      const { id, type, exp }: any = jwt.verify(args.refreshToken, process.env.JWT_SECRET_KEY!);
      const user =
        type === 'REFRESH' &&
        exp > new Date().getTime() &&
        (await User.findOne({
          where: { id },
        }));

      if (user.refreshToken === args.refreshToken) {
        const accessToken = jwt.sign(
          {
            id: user.id,
            type: 'ACCESS',
            exp: new Date().getTime() + 1000 * 60 * 30,
          },
          process.env.JWT_SECRET_KEY!,
        );

        return accessToken;
      }
    },
  },
};

export default resolverMap;
