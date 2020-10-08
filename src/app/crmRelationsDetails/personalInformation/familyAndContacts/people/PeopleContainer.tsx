import React from 'react';

import { useGetUsersQuery } from 'api/types';
import { Loader } from 'ui/atoms';
import { usePagination } from 'hooks/usePagination/usePagination';

import { People } from './People';

export const PeopleContainer = () => {
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

  return <People users={data.getAllProfiles.items || []} />;
};
