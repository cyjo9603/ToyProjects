import { Resolvers } from '../../../types/types';

import chattingLog from '../shared/chattingLog';

const resolvers: Resolvers = {
  Query: {
    getChatList: () => {
      return chattingLog;
    },
  },
};

export default resolvers;
