import React, { useState } from 'react';
import arrayMutators from 'final-form-arrays';

import { AutosaveForm } from 'ui/organisms';

import { PricesGeneral } from './PricesGeneral';
import { PriceType } from './PricesGeneral.types';

export const PricesGeneralContainer = () => {
  const [types, setTypes] = useState<PriceType[]>([]); // TODO: replace it with backend data

  const handleSave = () => {
    return Promise.resolve(undefined);
  };

  return (
    <AutosaveForm onSave={handleSave} mutators={{ ...arrayMutators }}>
      <PricesGeneral
        types={types}
        onSetPrice={async newTypes => {
          setTypes(newTypes.prices);

          return undefined;
        }}
      />
    </AutosaveForm>
  );
};
