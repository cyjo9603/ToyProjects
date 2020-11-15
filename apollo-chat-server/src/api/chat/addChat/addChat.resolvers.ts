import { Resolvers } from '../../../types/types';

import chattingLog from '../shared/chattingLog';
import { NEW_CHAT } from '../subscriptionChat/subscriptionChat.resolvers';

const resolvers: Resolvers = {
  Mutation: {
    addChat: (_, { writer, description }, { pubsub }) => {
      const id = chattingLog.length;
      const newChat = { id, writer, description };
      chattingLog.push(newChat);
      pubsub.publish(NEW_CHAT, { newChat });
      return {
        result: true,
      };
    },
  },
};

export default resolvers;
