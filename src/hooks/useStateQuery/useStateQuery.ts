import { useLocation } from 'react-router-dom';

import { StateQueryProps, ReturnStateQuery } from './useStateQuery.types';

export const useStateQuery: <T>(p: StateQueryProps<T>) => ReturnStateQuery<T> = ({ query, variables }) => {
  const { state } = useLocation<{ newlyAdded: boolean; data: object }>();
  const skip = state?.newlyAdded && !!state?.data;
  const { loading, error, data: response } = query({
    variables,
    skip,
  });

  let data = response;

  if (!state?.newlyAdded && response) {
    Object.values(response).map(part => {
      data = { ...data, ...part };

      return data;
    });
  } else if (skip) {
    data = Object.assign(state?.data);
  }

  return { error, loading, data };
};
