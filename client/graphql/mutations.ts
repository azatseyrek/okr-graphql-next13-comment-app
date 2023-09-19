import { gql } from '@apollo/client';

export const ADD_NEW_POST = gql`
mutation {
    insert_posts_one(object: {description:"test postu", user_id:1, }){
      description
    }
  }
`;
