import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import {
  ListMatchProfilesDocument,
  useDeleteMatchProfileMutation,
  useListMatchProfilesQuery,
  useCloneMatchProfileMutation,
} from 'api/types';
import { useLocale, useSnackbar } from 'hooks';
import { joinUrlParams } from 'routing/AppRoute.utils';
import { useEntityType } from 'app/shared/entityType';

import { MatchProfileList } from './List';
import { ListContainerProps } from './List.types';

export const MatchProfileListContainer = (props: ListContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const { data } = useListMatchProfilesQuery({ variables: { crmId: id }, fetchPolicy: 'no-cache' });
  const [deleteMatchProfile] = useDeleteMatchProfileMutation();
  const [cloneMatchProfile] = useCloneMatchProfileMutation();
  const { open: openSnackbar } = useSnackbar();
  const { formatMessage } = useLocale();
  const { push } = useHistory();
  const { baseUrl } = useEntityType();

  const handleDeleteMatchProfile = async (matchProfileId: string) => {
    try {
      const { data: deleteData } = await deleteMatchProfile({
        variables: { id: matchProfileId },
        refetchQueries: [
          {
            query: ListMatchProfilesDocument,
            variables: {
              crmId: id,
            },
          },
        ],
      });

      if (!deleteData?.deleteMatchProfile) {
        throw new Error();
      }

      openSnackbar({
        severity: 'success',
        message: formatMessage({ id: 'crm.details.personal_information_match_profile.delete.success_message' }),
        modalContent: <></>,
        modalTitle: formatMessage({
          id: 'crm.details.personal_information_match_profile.delete.success_message.title',
        }),
      });

      return undefined;
    } catch (error) {
      return { error: true };
    }
  };

  const handleCloneMatchProfile = async (matchProfileId: string) => {
    try {
      const { data: cloneData } = await cloneMatchProfile({
        variables: { input: { id: matchProfileId } },
      });

      if (!cloneData?.cloneMatchProfile) {
        throw new Error();
      }

      push(
        joinUrlParams(`${baseUrl}/personal_information_match_profile/:matchProfileId/edit`, {
          id,
          matchProfileId: cloneData.cloneMatchProfile.id,
        }),
      );

      return undefined;
    } catch (error) {
      return { error: true };
    }
  };

  return (
    <MatchProfileList
      {...props}
      matchProfiles={data?.listMatchProfiles || []}
      onCloneMatchProfile={handleCloneMatchProfile}
      onDeleteMatchProfile={handleDeleteMatchProfile}
    />
  );
};
