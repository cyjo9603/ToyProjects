import { IResolvers } from 'graphql-tools';

const resolverMap: IResolvers = {
  Query: {
    helloWorld: () => 'Hello GraphQL',
  },
};

export default resolverMap;
