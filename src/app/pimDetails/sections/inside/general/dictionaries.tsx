import React from 'react';
import { BellIcon } from 'ui/atoms/icons';
import { WindowType } from 'api/types';

export const windowTypes = Object.keys(WindowType).map(key => ({
  label: `dictionaries.inside.windows.${key}`,
  icon: <BellIcon color="inherit" />,
  value: key,
}));
