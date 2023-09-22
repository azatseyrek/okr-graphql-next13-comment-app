import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
  query {
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

export const IS_USER_EXIST = gql`
  query isUserExist($email: String!) {
    users(where: { email: { _eq: $email } }) {
      id
    }
  }
`;
