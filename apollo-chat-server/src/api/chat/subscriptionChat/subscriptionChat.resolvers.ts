import { Resolvers } from '../../../types/types';

export const NEW_CHAT = 'NEW_CHAT';

const resolvers: Resolvers = {
  Subscription: {
    subscriptionChat: {
      subscribe: (_, __, { pubsub }): any => {
        return pubsub.asyncIterator(NEW_CHAT);
      },
    },
  },
};

export default resolvers;
