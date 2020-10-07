import React from 'react';
import { useHistory } from 'react-router-dom';

import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { AddTeamInput, SettingInfoDocument, useAddTeamMutation } from 'api/types';
import { CreateTeamModal } from 'app/settings/sections/teams/modals/CreateTeamModal';
import { AppRoute } from 'routing/AppRoute.enum';

export const CreateTeamModalContainer = ({ isOpened, onClose }: ModalContainerProps) => {
  const [addTeam] = useAddTeamMutation();
  const { push } = useHistory();

  const handleSave = async (data: AddTeamInput) => {
    try {
      const response = await addTeam({
        variables: {
          input: data,
        },
        refetchQueries: [
          {
            query: SettingInfoDocument,
          },
        ],
      });

      if (response && response.data?.addTeam?.id) {
        push(AppRoute.teams.replace(':id', response.data?.addTeam?.id), {
          newlyAdded: true,
        });
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  return <CreateTeamModal isOpened={isOpened} onClose={onClose} onSubmit={handleSave} />;
};
