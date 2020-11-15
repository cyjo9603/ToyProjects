const chattingLog = [
  {
    id: 0,
    writer: 'admin',
    description: 'HELLO',
  },
];

const resolvers = {
  Query: {
    chatting: () => {
      return chattingLog;
    },
  },
};

export default resolvers;
