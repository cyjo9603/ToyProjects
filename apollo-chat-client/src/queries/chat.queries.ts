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

export const ADD_CHAT = gql`
  mutation AddChat($writer: String!, $description: String!) {
    addChat(writer: $writer, description: $description) {
      result
      error
    }
  }
`;

export const SUB_CHAT = gql`
  subscription SubChat {
    subscriptionChat {
      id
      writer
      description
    }
  }
`;
