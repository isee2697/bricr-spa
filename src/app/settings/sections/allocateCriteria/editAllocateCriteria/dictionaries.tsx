import React from 'react';

import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { SquareIcon } from 'ui/atoms/icons';
import { HomeSituation, PersonRole, TypeOfEmployment } from 'api/types';

export const YesNoOptions: RadioDataType[] = [
  {
    value: 'yes',
    label: 'yes',
    icon: <SquareIcon />,
  },
  {
    value: 'no',
    label: 'no',
    icon: <SquareIcon />,
  },
];

export const HomeSituationOptions: RadioDataType[] = Object.keys(HomeSituation).map(key => ({
  value: key,
  label: key,
  icon: <SquareIcon />,
}));

export const TypeOfEmploymentOptions: RadioDataType[] = Object.keys(TypeOfEmployment).map(key => ({
  value: key,
  label: key,
  icon: <SquareIcon />,
}));

export const PersonRoleOptions: RadioDataType[] = Object.keys(PersonRole).map(key => ({
  value: key,
  label: key,
  icon: <SquareIcon />,
}));
