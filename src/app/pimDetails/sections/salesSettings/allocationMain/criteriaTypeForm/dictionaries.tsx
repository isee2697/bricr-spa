import React from 'react';

import { AllocateType } from 'api/types';
import { HomeIcon } from 'ui/atoms/icons';

export const allocateTypeCheckboxes = Object.keys(AllocateType).map(key => ({
  label: key,
  icon: <HomeIcon color="inherit" />,
  value: key,
}));
