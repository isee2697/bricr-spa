import React from 'react';

import { AllocateHomeSituation, AllocateEmploymentType, AllocateAssignRole } from 'api/types';
import { SquareIcon } from 'ui/atoms/icons';

export const homeSituationCheckboxes = Object.keys(AllocateHomeSituation).map(key => ({
  label: key,
  icon: <SquareIcon color="inherit" />,
  value: key,
}));

export const employementCheckboxes = Object.keys(AllocateEmploymentType).map(key => ({
  label: key,
  icon: <SquareIcon color="inherit" />,
  value: key,
}));

export const rolesCheckboxes = Object.keys(AllocateAssignRole).map(key => ({
  label: key,
  icon: <SquareIcon color="inherit" />,
  value: key,
}));
