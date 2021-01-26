import React from 'react';

import { palette } from 'theme/palette';
import { BuildingIcon, NewConstructionIcon } from 'ui/atoms/icons';
import { ChecklistType } from '../checklist/Checklist.types';

export const ChecklistTypes = [
  {
    type: ChecklistType.PropertyForSales,
    translation: 'checklist',
    icon: <BuildingIcon color="inherit" />,
    color: palette.red,
    disabled: false,
  },
  {
    type: ChecklistType.Interest,
    translation: 'checklist',
    icon: <NewConstructionIcon color="inherit" />,
    color: palette.green,
    disabled: false,
  },
];
