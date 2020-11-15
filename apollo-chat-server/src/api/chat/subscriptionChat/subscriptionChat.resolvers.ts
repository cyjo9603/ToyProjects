import { Resolvers } from '../../../types/types';

export const NEW_CHAT = 'NEW_CHAT';

const resolvers: Resolvers = {
  Subscription: {
    subscriptionChat: (_, __, { pubsub }): any => {
      pubsub.asyncIterator(NEW_CHAT);
    },
  },
};

export default resolvers;
