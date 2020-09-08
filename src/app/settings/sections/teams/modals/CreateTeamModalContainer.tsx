import React from 'react';

import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { AddTeamInput, SettingInfoDocument, useAddTeamMutation } from 'api/types';
import { CreateTeamModal } from 'app/settings/sections/teams/modals/CreateTeamModal';

export const CreateTeamModalContainer = ({ isOpened, onClose }: ModalContainerProps) => {
  const [addTeam] = useAddTeamMutation();

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
      }

      return undefined;
    } catch {
      return { error: true };
    }
  };

  return <CreateTeamModal isOpened={isOpened} onClose={onClose} onSubmit={handleSave} />;
};
