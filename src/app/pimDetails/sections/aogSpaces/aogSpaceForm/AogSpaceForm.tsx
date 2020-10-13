import React, { ReactNode } from 'react';
import arrayMutators from 'final-form-arrays';
import { AogSpaceType } from 'api/types';
import { AutosaveForm } from 'ui/organisms';

import { AogSpaceFormProps } from './AogSpaceForm.types';
import { AnimalsForm } from './animal/AnimalForm';
import { BuildingsForm } from './building/BuildingForm';
import { InstallationsForm } from './installation/InstallationForm';
import { GroundsForm } from './ground/GroundForm';

export const AogSpaceForm = ({ onSave, data }: AogSpaceFormProps) => {
  let form: ReactNode;

  switch (data.type) {
    case AogSpaceType.Animals:
      form = <AnimalsForm data={data} />;
      break;
    case AogSpaceType.Buildings:
      form = <BuildingsForm data={data} />;
      break;
    case AogSpaceType.Installations:
      form = <InstallationsForm data={data} />;
      break;
    case AogSpaceType.Ground:
      form = <GroundsForm data={data} />;
      break;
  }

  return (
    <AutosaveForm key={data.id} mutators={{ ...arrayMutators }} initialValues={data} onSave={onSave}>
      {form}
    </AutosaveForm>
  );
};
