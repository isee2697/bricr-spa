import React from 'react';

import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';
import { SquareIcon } from 'ui/atoms/icons';
import { TeamRight } from 'api/types';

export const AllocateCriteriaTypes: RadioDataType[] = Object.keys(TeamRight).map(type => ({
  value: type,
  label: type,
  icon: <SquareIcon />,
}));
