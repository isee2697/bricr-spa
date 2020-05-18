import React from 'react';

import { GenericField } from 'form/fields';
import { AutosaveForm } from 'ui/organisms';

export const MainDescriptionContainer = () => {
  // TODO: implement saving data

  return (
    <AutosaveForm onSave={() => Promise.resolve({ error: false })} subscription={{}}>
      <GenericField placeholder="pim_details.outside.main.description_placeholder" name="description" />
    </AutosaveForm>
  );
};
