import React from 'react';

import { usePagination } from 'hooks';
import {
  GetUsersDocument,
  Profile,
  useDeleteProfileMutation,
  useGetUsersCountQuery,
  useGetUsersQuery,
} from 'api/types';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { Loader } from 'ui/atoms';

import { Users } from './Users';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

export const UsersContainer = () => {
  const { data: count } = useGetUsersCountQuery();
  const [deleteProfile] = useDeleteProfileMutation();

  const { query: paginationQuery } = usePagination({
    itemsCount: count?.getAllProfiles.metadata?.total ?? 0,
    perPageOptions: PER_PAGE_OPTIONS,
  });

  const { data: listData } = useGetUsersQuery({
    variables: { ...paginationQuery },
    fetchPolicy: 'no-cache',
  });

  const handleDelete = async (userId: string) => {
    try {
      const response = await deleteProfile({
        variables: {
          id: userId,
        },
        refetchQueries: [{ query: GetUsersDocument }],
      });

      if (!response) {
        throw Error();
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  if (listData) {
    return (
      <Users
        total={count?.getAllProfiles.metadata?.total ?? undefined}
        data={(listData.getAllProfiles?.items ?? []) as Profile[]}
        onDelete={handleDelete}
      />
    );
  }

  return <Loader />;
};
