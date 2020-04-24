import React, { useMemo } from 'react';
import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client';
import { ApolloClient as ApolloClientType } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { RestLink } from 'apollo-link-rest';

import { useAuthState } from 'hooks/useAuthState/useAuthState';

import { ApiClientProviderProps } from './ApiClientContextController.types';

const restLink = new RestLink({ uri: process.env.REACT_APP_SECURITY_URL });

const graphLink = (token: string | null) =>
  createHttpLink({
    uri: process.env.REACT_APP_API_URL,
    fetch: (endpoint, options) => {
      return fetch(endpoint, {
        ...options,
        headers: {
          ...options?.headers,
          ...(token
            ? {
                authorization: `Bearer ${token}`,
              }
            : undefined),
        },
      });
    },
  });

const cache = new InMemoryCache();

export const ApiClientContextController = ({ children }: ApiClientProviderProps) => {
  const { accessToken } = useAuthState();

  const client = useMemo(() => {
    return new ApolloClient({
      link: from([restLink, graphLink(accessToken)]),
      cache,
    });
  }, [accessToken]);

  return <ApolloProvider client={(client as unknown) as ApolloClientType<typeof cache>}>{children}</ApolloProvider>;
};
