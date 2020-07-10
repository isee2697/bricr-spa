import React from 'react';
import arrayMutators from 'final-form-arrays';

import { AutosaveForm } from 'ui/organisms';
import { NcpCharacteristicsSections } from 'api/types';

import { Characteristics } from './Characteristics';

export const CharacteristicsContainer = () => {
  const handleSave = async () => {
    return undefined;
  };

  return (
    <AutosaveForm onSave={handleSave} mutators={{ ...arrayMutators }}>
      <Characteristics
        characteristicsSections={Object.values(NcpCharacteristicsSections)}
        updatedBy={null}
        dateUpdated={null}
      />
    </AutosaveForm>
  );
};
