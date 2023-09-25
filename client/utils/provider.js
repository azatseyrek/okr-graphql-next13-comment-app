'use client';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { HttpLink, split } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = new WebSocketLink({
  uri: `ws://localhost:8080/v1/graphql`,
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        'x-hasura-admin-secret': 'myadminsecretkey',
        // Authorization: 'Bearer ${authToken}',
      },
    },
  },
});

const httpLink = new HttpLink({
  uri: 'http://localhost:8080/v1/graphql',
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export const client = new ApolloClient({
  // uri: 'http://localhost:4000',
  link: splitLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default function Providers({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
