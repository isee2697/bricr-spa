import React, { useMemo, useEffect } from 'react';
import { ApolloClient, InMemoryCache, from } from '@apollo/client';
import { ApolloClient as ApolloClientType } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { RestLink } from 'apollo-link-rest';

import { authStorage } from 'context/auth/authStorage/AuthStorage';
import { useAuthState } from 'hooks/useAuthState/useAuthState';
import { useRefreshToken, useShowError } from 'hooks';

import { ApiClientProviderProps } from './ApiClientContextController.types';
import { graphLink } from './graphLink/graphLink';

const restLink = (token: string | null) =>
  new RestLink({
    uri: '',
    endpoints: {
      upload: process.env.REACT_APP_FILE_URL + '/upload',
      default: process.env.REACT_APP_SECURITY_URL,
      empty: '',
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
    bodySerializers: {
      fileEncode: (data: File, headers: Headers) => {
        return { body: data, headers };
      },
    },
  });
const cache = new InMemoryCache();

export const ApiClientContextController = ({ children }: ApiClientProviderProps) => {
  const refetchToken = useRefreshToken();
  const showError = useShowError();
  const { isAuthorized } = useAuthState();

  const client = useMemo(() => {
    return new ApolloClient({
      link: from([restLink(authStorage?.accessToken), graphLink(authStorage, showError, refetchToken)]),
      cache,
    });
  }, [refetchToken, showError]);

  useEffect(() => {
    if (!isAuthorized) {
      client.clearStore();
    }
  });

  return (
    <ApolloProvider client={(client as unknown) as ApolloClientType<typeof InMemoryCache>}>{children}</ApolloProvider>
  );
};
