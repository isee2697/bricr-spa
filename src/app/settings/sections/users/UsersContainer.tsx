import React from 'react';

import { usePagination } from 'hooks';
import { Profile, useGetUsersCountQuery, useGetUsersQuery } from 'api/types';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { Loader } from 'ui/atoms';

import { Users } from './Users';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

export const UsersContainer = () => {
  const { data: count } = useGetUsersCountQuery();

  const { query: paginationQuery } = usePagination({
    itemsCount: count?.getAllProfiles.metadata?.total ?? 0,
    perPageOptions: PER_PAGE_OPTIONS,
  });

  const { data: listData } = useGetUsersQuery({
    variables: { ...paginationQuery },
    fetchPolicy: 'no-cache',
  });

  if (listData) {
    return <Users data={(listData.getAllProfiles?.items ?? []) as Profile[]} />;
  }

  return <Loader />;
};
