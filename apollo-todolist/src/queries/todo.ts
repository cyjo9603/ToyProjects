import { gql } from '@apollo/client';

export const GET_TODOS = gql`
  query {
    getTodos @client
  }
`;

/*
  query userInfo {
    name
    phone
    getTodos @client
  }
 */
