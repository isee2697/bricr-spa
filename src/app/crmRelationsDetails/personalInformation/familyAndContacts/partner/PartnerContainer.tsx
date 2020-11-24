import React from 'react';

import { useGetUsersQuery } from 'api/types';
import { Loader } from 'ui/atoms';
import { usePagination } from 'hooks/usePagination/usePagination';

import { Partner } from './Partner';
import { PartnerProps } from './Partner.types';

export const PartnerContainer = ({ data, onSave }: PartnerProps) => {
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

  return <Partner data={data} onSave={onSave} />;
};
