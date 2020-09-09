import React from 'react';

import { TeamRight } from 'api/types';
import { LockIcon } from 'ui/atoms/icons';

export const TeamRightsOptions = Object.values(TeamRight).map(right => ({
  label: right,
  icon: <LockIcon />,
  value: right,
}));
