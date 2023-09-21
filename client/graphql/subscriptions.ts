import { gql } from '@apollo/client';

export const GET_ALL_POSTS_SUBSC = gql`
  subscription {
    posts(order_by: { created_at: desc }) {
      id
      created_at
      user {
        fullName
      }
      description
      comments {
        created_at
        comment
        user {
          fullName
        }
      }
      comments_aggregate {
        aggregate {
          count
        }
      }
    }
  }
`;
