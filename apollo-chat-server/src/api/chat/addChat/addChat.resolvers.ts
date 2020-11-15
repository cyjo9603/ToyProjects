import { Resolvers } from '../../../types/types';

import chattingLog from '../shared/chattingLog';

const resolvers: Resolvers = {
  Mutation: {
    addChat: (_, { writer, description }) => {
      const id = chattingLog.length;
      const newChat = { id, writer, description };
      chattingLog.push(newChat);
      return {
        result: true,
      };
    },
  },
};

export default resolvers;
