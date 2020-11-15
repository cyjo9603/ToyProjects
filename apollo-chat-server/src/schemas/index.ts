import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Chat {
    id: Int!
    writer: String!
    description: String!
  }

  type Query {
    chatting: [Chat]!
  }
`;

export default typeDefs;
