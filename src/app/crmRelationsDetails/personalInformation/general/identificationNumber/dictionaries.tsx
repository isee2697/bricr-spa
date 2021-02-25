import React from 'react';

import { IdentificationNumberType } from 'api/types';
import { SquareIcon } from 'ui/atoms/icons';

export const idNumberTypes = Object.keys(IdentificationNumberType).map(key => ({
  label: key,
  icon: <SquareIcon color="inherit" />,
  value: key,
}));
