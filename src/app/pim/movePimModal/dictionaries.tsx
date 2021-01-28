import React from 'react';

import { PropertyCategory } from 'app/shared/addPimModal/AddPimModal.types';
import { palette } from 'theme/palette';
import { BuildingIcon, NewConstructionIcon } from 'ui/atoms/icons';

export const CATEGORIES = [
  {
    type: PropertyCategory.PROPERTY,
    translation: 'property',
    icon: <BuildingIcon color="inherit" />,
    color: palette.red,
    disabled: false,
  },
  {
    type: PropertyCategory.PROJECT,
    translation: 'new_construction_project',
    icon: <NewConstructionIcon color="inherit" />,
    color: palette.green,
    disabled: false,
  },
];
