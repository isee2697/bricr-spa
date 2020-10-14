import React from 'react';

import { useGetUsersQuery } from 'api/types';
import { Loader } from 'ui/atoms';
import { usePagination } from 'hooks/usePagination/usePagination';

import { Partner } from './Partner';

export const PartnerContainer = () => {
  const { query: paginationQuery } = usePagination({
    itemsCount: 0,
    perPageOptions: ['All'],
  });
  const { loading, data } = useGetUsersQuery({
    variables: { ...paginationQuery },
    fetchPolicy: 'no-cache',
  });

  if (loading || !data) {
    return <Loader />;
  }

  return <Partner users={data.getAllProfiles.items || []} />;
};
