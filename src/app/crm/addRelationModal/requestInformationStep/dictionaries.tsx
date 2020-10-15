import React from 'react';

import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { TypeOfInformation } from '../AddRelationModal.types';
import { SquareIcon } from 'ui/atoms/icons';

export const InformationTypes: RadioDataType[] = Object.keys(TypeOfInformation).map(type => ({
  label: `dictionaries.type_of_information.${type}`,
  icon: <SquareIcon />,
  value: type,
}));
