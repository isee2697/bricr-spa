import React from 'react';

import { useGetUsersQuery } from 'api/types';
import { Loader } from 'ui/atoms';
import { usePagination } from 'hooks/usePagination/usePagination';

import { People } from './People';
import { PeopleProps } from './People.types';

export const PeopleContainer = ({ data, onSave }: PeopleProps) => {
  const { query: paginationQuery } = usePagination({
    itemsCount: 0,
    perPageOptions: ['All'],
  });
  const { loading, data: usersData } = useGetUsersQuery({
    variables: { ...paginationQuery },
    fetchPolicy: 'no-cache',
  });

  if (loading || !usersData) {
    return <Loader />;
  }

  return <People data={data} onSave={onSave} />;
};
