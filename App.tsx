import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import Home from './src/components/Home';
import graphqlClient from './src/sdk/graphqlClient';

export default function App() {
  return (
    <ApolloProvider client={graphqlClient}>
      <Home />
    </ApolloProvider>
  );
}
