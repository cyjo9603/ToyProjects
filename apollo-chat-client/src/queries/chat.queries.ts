import { gql } from '@apollo/client';

export const GET_CHAT_LIST = gql`
  query GetChatList {
    getChatList {
      id
      writer
      description
    }
  }
`;
