import React, { useMemo } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { useAuthState } from 'hooks/useAuthState/useAuthState';

import { ApiClientProviderProps } from './ApiClientContextController.types';

export const ApiClientContextController = ({ children }: ApiClientProviderProps) => {
  const { accessToken } = useAuthState();

  const client = useMemo(() => {
    return new ApolloClient({
      uri: process.env.REACT_APP_API_URL,
      fetch: (endpoint, options) => {
        return fetch(endpoint, {
          ...options,
          headers: {
            ...options?.headers,
            ...(accessToken
              ? {
                  authorization: `Bearer ${accessToken}`,
                }
              : undefined),
          },
        });
      },
    });
  }, [accessToken]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
