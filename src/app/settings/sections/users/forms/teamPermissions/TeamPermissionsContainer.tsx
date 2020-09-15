import React from 'react';
import { useParams } from 'react-router-dom';

import { GetUserProfileDocument, ProfileTeam, useUpdateUserInTeamMutation } from 'api/types';
import { TeamPermissionsContainerProps } from 'app/settings/sections/users/forms/teamPermissions/TeamPermissions.types';
import { TeamPermissions } from 'app/settings/sections/users/forms/teamPermissions/TeamPermissions';

export const TeamPermissionsContainer = ({ data, index, isEditing }: TeamPermissionsContainerProps) => {
  const { id } = useParams<{ id: string }>();
  const [updateTeamMember] = useUpdateUserInTeamMutation();

  const handleSave = async (update: ProfileTeam) => {
    try {
      const response = await updateTeamMember({
        variables: {
          input: {
            teamId: data.id,
            userId: id,
            permissions: {
              createPermission: update.createPermission,
              readPermission: update.readPermission,
              updatePermission: update.updatePermission,
              deletePermission: update.deletePermission,
            },
          },
        },
        refetchQueries: [
          {
            query: GetUserProfileDocument,
            variables: { id },
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

  return <TeamPermissions isEditing={isEditing} index={index} data={data} onSave={handleSave} />;
};
