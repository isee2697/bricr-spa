import React from 'react';

import { AddTeamInput } from 'api/types';
import { GenericField } from 'form/fields';
import { FormModal } from 'ui/organisms';
import { FormModalProps } from 'ui/organisms/formModal/FormModal.types';
import { useLocale } from 'hooks';

export const CreateTeamModal = (props: FormModalProps<AddTeamInput>) => {
  const { formatMessage } = useLocale();

  return (
    <FormModal<AddTeamInput>
      {...props}
      title={formatMessage({ id: 'settings.teams.add' })}
      addText={formatMessage({ id: 'settings.teams.add' })}
    >
      <GenericField name="name" label="settings.teams.name_label" placeholder="settings.teams.name_placeholder" />
      <GenericField
        name={'description'}
        label="settings.teams.description_label"
        placeholder="settings.teams.description_placeholder"
      />
    </FormModal>
  );
};
