import React, { useEffect, useState } from 'react';

import { usePagination } from 'hooks';
import {
  GetUserProfileDocument,
  GetUsersCountDocument,
  GetUsersDocument,
  GetUsersQueryVariables,
  Profile,
  useDeactivateProfileMutation,
  useGetUsersCountQuery,
  useGetUsersQuery,
  useReactivateProfileMutation,
  useUpdateProfileMutation,
} from 'api/types';
import { PerPageType } from 'ui/atoms/pagination/Pagination.types';
import { Loader } from 'ui/atoms';
import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';

import { Users } from './Users';

const PER_PAGE_OPTIONS: PerPageType[] = [10, 25, 'All'];

export const UsersContainer = () => {
  const [status = 'active', setStatus] = useState<ActionTabStatus>();
  const { data: count, stopPolling: stopPollingUserCount } = useGetUsersCountQuery();
  const [deactivateProfile] = useDeactivateProfileMutation();
  const [reactivateProfile] = useReactivateProfileMutation();
  const [updateProfile] = useUpdateProfileMutation();

  const { pagination, query: paginationQuery } = usePagination({
    itemsCount: count?.activeCount.metadata?.total ?? 0,
    perPageOptions: PER_PAGE_OPTIONS,
  });

  const variables: GetUsersQueryVariables = { ...paginationQuery };

  if (status !== 'actionRequired') {
    variables.isActive = status === 'active';
  }

  const { data: listData } = useGetUsersQuery({
    variables,
  });

  const handleSave = async (update: Profile) => {
    if (!update.email) {
      throw Error();
    }

    try {
      const response = await updateProfile({
        variables: {
          input: {
            id: update.id,
            email: update.email,
            isAdmin: update.isAdmin,
          },
        },
        refetchQueries: [{ query: GetUserProfileDocument, variables: { id: update.id } }],
      });

      if (!response) {
        throw Error();
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  const handleActivation = async (profile: Profile) => {
    const callFunction = profile.isActive ? deactivateProfile : reactivateProfile;

    try {
      const response = await callFunction({
        variables: {
          id: profile.id,
        },
        refetchQueries: [{ query: GetUsersDocument, variables }, { query: GetUsersCountDocument }],
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
        total={count ?? undefined}
        data={(listData.getAllProfiles?.items ?? []) as Profile[]}
        onActivationChange={handleActivation}
        status={status}
        setStatus={newStatus => setStatus(newStatus)}
        pagination={pagination}
        onUpdate={handleSave}
      />
    );
  }

  return <Loader />;
};
