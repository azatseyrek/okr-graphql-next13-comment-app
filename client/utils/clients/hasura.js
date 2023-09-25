import { GraphQLClient } from 'graphql-request';

const headers = {
  'Content-Type': 'application/json',
  'x-hasura-admin-secret': 'myadminsecretkey',
};

export default new GraphQLClient('http://localhost:8080/v1/graphql', {
  headers,
});
