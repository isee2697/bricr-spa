import React from 'react';
import arrayMutators from 'final-form-arrays';

import { AutosaveForm } from 'ui/organisms';

import { General } from './General';

export const GeneralContainer = () => {
  const handleSave = () => {
    return Promise.resolve(undefined);
  };

  return (
    <AutosaveForm onSave={handleSave} mutators={{ ...arrayMutators }}>
      <General />
    </AutosaveForm>
  );
};
