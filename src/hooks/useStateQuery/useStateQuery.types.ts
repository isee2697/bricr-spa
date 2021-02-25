import * as ApolloReactHooks from '@apollo/react-hooks';
import * as ApolloReactCommon from '@apollo/react-common';
import { ApolloError } from '@apollo/client';

export type StateQueryProps<T> = {
  mapKeys?: boolean;
  query: (baseOptions: ApolloReactHooks.QueryHookOptions<T, { id: string }>) => ApolloReactCommon.QueryResult<T>;
  variables: { id: string };
};
export type ReturnStateQuery<T> = {
  loading: boolean;
  data?: unknown;
  error?: ApolloError;
};
