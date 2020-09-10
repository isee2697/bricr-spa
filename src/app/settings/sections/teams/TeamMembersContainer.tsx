import React from 'react';
import { useParams } from 'react-router-dom';

import { TeamMembers } from 'app/settings/sections/teams/TeamMembers';
import { GetTeamDetailsDocument, useRemoveUserFromTeamMutation } from 'api/types';

import { TeamMemberContainerProps } from './Team.types';

export const TeamMembersContainer = ({ data }: TeamMemberContainerProps) => {
  const { id: teamId } = useParams<{ id: string }>();
  const [removeFromteam] = useRemoveUserFromTeamMutation();
  const handleSave = async () => {
    return undefined;
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
        refetchQueries: [
          {
            query: GetTeamDetailsDocument,
            variables: { id: teamId },
          },
        ],
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
