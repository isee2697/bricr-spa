import React, { useMemo, useEffect } from 'react';
import { ApolloClient, InMemoryCache, from } from '@apollo/client';
import { ApolloClient as ApolloClientType } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { RestLink } from 'apollo-link-rest';

import { useAuthDispatch } from 'hooks/useAuthDispatch/useAuthDispatch';
import { authStorage } from 'context/auth/authStorage/AuthStorage';
import { useAuthState } from 'hooks/useAuthState/useAuthState';

import { ApiClientProviderProps } from './ApiClientContextController.types';
import { graphLink } from './graphLink/graphLink';

const restLink = new RestLink({
  uri: '',
  endpoints: {
    upload: process.env.REACT_APP_FILE_URL + '/upload',
    default: process.env.REACT_APP_SECURITY_URL,
    empty: '',
  },
  bodySerializers: {
    fileEncode: (data: File, headers: Headers) => {
      return { body: data, headers };
    },
  },
});
const cache = new InMemoryCache();

export const ApiClientContextController = ({ children }: ApiClientProviderProps) => {
  const dispatch = useAuthDispatch();
  const { isAuthorized } = useAuthState();

  const client = useMemo(() => {
    return new ApolloClient({
      link: from([restLink, graphLink(dispatch, authStorage)]),
      cache,
    });
  }, [dispatch]);

  useEffect(() => {
    if (!isAuthorized) {
      client.clearStore();
    }
  });

  return (
    <ApolloProvider client={(client as unknown) as ApolloClientType<typeof InMemoryCache>}>{children}</ApolloProvider>
  );
};
