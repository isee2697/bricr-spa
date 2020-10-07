import React from 'react';
import { useParams } from 'react-router-dom';

import { TeamMembers } from 'app/settings/sections/teams/TeamMembers';
import {
  GetTeamDetailsDocument,
  TeamMember,
  useRemoveUserFromTeamMutation,
  useUpdateUserInTeamMutation,
} from 'api/types';

import { TeamMemberContainerProps } from './Team.types';

export const TeamMembersContainer = ({ data }: TeamMemberContainerProps) => {
  const { id: teamId } = useParams<{ id: string }>();
  const [removeFromteam] = useRemoveUserFromTeamMutation();
  const [updateTeamMember] = useUpdateUserInTeamMutation();

  const refetchQueries = [
    {
      query: GetTeamDetailsDocument,
      variables: { id: teamId },
    },
  ];

  const handleSave = async (data: TeamMember) => {
    try {
      const response = await updateTeamMember({
        variables: {
          input: {
            teamId,
            userId: data.user.id,
            notes: data.notes,
            permissions: {
              createPermission: data.createPermission,
              readPermission: data.readPermission,
              updatePermission: data.updatePermission,
              deletePermission: data.deletePermission,
            },
          },
        },
        refetchQueries,
      });

      if (!response) {
        throw Error();
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  const handeRemove = async (userId: string) => {
    try {
      const response = await removeFromteam({
        variables: {
          input: {
            teamId,
            userId,
          },
        },
        refetchQueries,
      });

      if (!response) {
        throw Error();
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  return <TeamMembers onRemove={handeRemove} onSave={handleSave} data={data} />;
};
