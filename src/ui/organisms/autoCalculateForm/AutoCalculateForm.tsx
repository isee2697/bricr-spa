import React, { useState } from 'react';
import { useField } from 'react-final-form';

import { FormControlLabel, Checkbox, Box } from 'ui/atoms';

import { AutoCalculateFormProps } from './AutoCalculateForm.types';
import { AutoCalculateModal } from './autoCalculateModal/AutoCalculateModal';

export const AutoCalculateForm = ({ label, disabled, children, onChange, name }: AutoCalculateFormProps) => {
  const [modalOpened, setModalOpened] = useState(false);

  const { input } = useField<boolean>(name ?? '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    if (!checked) {
      input.onChange(false);
      onChange(false);

      return;
    }

    setModalOpened(true);
  };

  const handleSubmit = async (): Promise<{ error: boolean } | undefined> => {
    // TODO: change it when integrating with the backend
    return new Promise(resolve => {
      setTimeout(() => {
        input.onChange(true);
        onChange(true);

        resolve(undefined);
      }, 1000);
    });
  };

  return (
    <>
      {modalOpened && (
        <AutoCalculateModal
          isOpened={modalOpened}
          titleId="project_details.general.address.auto_title"
          descriptionFirstId="project_details.general.address.auto_description_1"
          descriptionSecondId="project_details.general.address.auto_description_2"
          onSubmit={handleSubmit}
          onClose={() => setModalOpened(false)}
        />
      )}
      <FormControlLabel
        control={
          <Box my={1}>
            <Checkbox color="primary" size="medium" checked={input.value} onChange={handleChange} disabled={disabled} />
          </Box>
        }
        label={label}
      />
      {children(input.value)}
    </>
  );
};
