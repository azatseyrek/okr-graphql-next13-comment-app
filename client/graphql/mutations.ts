import { gql } from '@apollo/client';

export const ADD_NEW_POST = gql`
  mutation {
    insert_posts_one(object: { description: "test postu", user_id: 1 }) {
      description
    }
  }
`;

export const INSERT_COMMENT_MUTATION = gql`
  mutation AddComment($comment: String!, $post_id: Int!, $user_id: Int!) {
    insert_comments_one(
      object: { comment: $comment, post_id: $post_id, user_id: $user_id }
    ) {
      comment
    }
  }
`;

export const INSERT_POST_MUTATION = gql`
  mutation AddPost($description: String!, $user_id: Int!) {
    insert_posts_one(object: { description: $description, user_id: $user_id }) {
      description
    }
  }
`;

export const REGISTER_USER_MUTATION = gql`
  mutation Register($email: String!, $fullName: String!, $password: String!) {
    insert_users_one(
      object: { email: $email, fullName: $fullName, password: $password }
    ) {
      id
      email
      fullName
    }
  }
`;
