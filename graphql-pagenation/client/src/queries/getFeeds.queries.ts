import { gql } from '@apollo/client';

export const GET_FEEDS = gql`
  query GetFeeds($page: Int!) {
    getFeeds(page: $page) {
      result
      error
      feeds {
        _id
        content
        createdAt
        updatedAt
      }
      total
    }
  }
`;
