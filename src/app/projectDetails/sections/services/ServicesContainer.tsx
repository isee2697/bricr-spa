import React from 'react';
import arrayMutators from 'final-form-arrays';

import { AutosaveForm } from 'ui/organisms';

import { Services } from './Services';

export const ServicesContainer = () => {
  const handleSave = () => {
    return Promise.resolve(undefined);
  };

  return (
    <AutosaveForm onSave={handleSave} mutators={{ ...arrayMutators }}>
      <Services onSave={handleSave} />
    </AutosaveForm>
  );
};
