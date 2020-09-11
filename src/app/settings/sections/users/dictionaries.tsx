import React from 'react';

import { GenderType } from 'api/types';
import { LockIcon } from 'ui/atoms/icons';

export const GenderOptions = Object.values(GenderType).map(gender => ({
  label: `dictionaries.gender.${gender}`,
  icon: <LockIcon />,
  value: gender,
}));
