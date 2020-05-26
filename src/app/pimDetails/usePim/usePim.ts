import { useParams } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';

import { PimDetailsDocument, PimDetailsQueryVariables, PimDetailsQuery } from 'api/types';

export const usePim = () => {
  const { id } = useParams<{ id: string }>();
  const apiClient = useApolloClient();

  const pim = apiClient.readQuery<PimDetailsQuery, PimDetailsQueryVariables>({
    query: PimDetailsDocument,
    variables: {
      id,
    },
  });

  if (!pim || !pim.getPim) {
    throw new Error("Pim hasn't been queried yet. It's not in the cache.");
  }

  return pim.getPim;
};
