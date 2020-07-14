import React from 'react';

import { AutosaveForm } from 'ui/organisms';

import { InterestForm } from './Interest.types';
import { Interest } from './Interest';

export const InterestContainer = () => {
  const handleSave = (values: InterestForm) => {
    return Promise.resolve(undefined);
  };

  return (
    <AutosaveForm onSave={handleSave} subscription={{}}>
      <Interest />
    </AutosaveForm>
  );
};
