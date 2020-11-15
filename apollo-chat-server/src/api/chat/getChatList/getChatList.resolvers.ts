const chattingLog = [
  {
    id: 0,
    writer: 'admin',
    description: 'HELLO',
  },
];

const resolvers = {
  Query: {
    getChatList: () => {
      return chattingLog;
    },
  },
};

export default resolvers;
