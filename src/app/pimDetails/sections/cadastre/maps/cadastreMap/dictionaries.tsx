import React from 'react';
import { CadastreMapType } from 'api/types';
import { FilterIcon } from 'ui/atoms/icons';

export const cadastralMapTypes = [
  {
    label: 'dictionaries.cadastral_map_types.Map',
    icon: <FilterIcon />,
    value: CadastreMapType.Map,
  },
  {
    label: 'dictionaries.cadastral_map_types.Register',
    icon: <FilterIcon />,
    value: CadastreMapType.Register,
  },
];
