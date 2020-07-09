import React, { useState } from 'react';

import { AutosaveForm } from 'ui/organisms';

import { Cost } from './Costs.types';
import { Costs } from './Costs';

export const CostsContainer = () => {
  const [costs, setCosts] = useState<Cost[]>([]); // TODO: replace it with backend data

  const handleSave = () => {
    return Promise.resolve(undefined);
  };

  return (
    <AutosaveForm onSave={handleSave}>
      <Costs
        costs={costs}
        onAddCost={async ({ type, name }) => {
          setCosts([...costs, { type, name }]);

          return undefined;
        }}
      />
    </AutosaveForm>
  );
};
