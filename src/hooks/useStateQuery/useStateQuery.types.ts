import * as ApolloReactHooks from '@apollo/react-hooks';
import * as ApolloReactCommon from '@apollo/react-common';
import { ApolloError, ApolloQueryResult } from '@apollo/client';

export type StateQueryProps<T> = {
  mapKeys?: boolean;
  query: (
    baseOptions: ApolloReactHooks.QueryHookOptions<T, { id: string; type?: string }>,
  ) => ApolloReactCommon.QueryResult<T>;
  variables: { id: string; type?: string };
};
export type ReturnStateQuery<T> = {
  loading: boolean;
  data?: unknown;
  error?: ApolloError;
  refetch: () => Promise<ApolloQueryResult<T>>;
};
