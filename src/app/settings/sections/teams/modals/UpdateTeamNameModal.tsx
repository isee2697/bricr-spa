import React from 'react';
import { GenericField } from 'form/fields';
import { FormModal } from 'ui/organisms';
import { FormModalProps } from 'ui/organisms/formModal/FormModal.types';
import { Team } from 'api/types';

export const UpdateTeamNameModal = (props: FormModalProps<Team>) => {
  return (
    <FormModal {...props}>
      <GenericField label="settings.teams.name_label" placeholder="settings.teams.name_placeholder" name="name" />
    </FormModal>
  );
};
