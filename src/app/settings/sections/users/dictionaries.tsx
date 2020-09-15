import React from 'react';

import { AdminSettings, GenderType } from 'api/types';
import { LockIcon, UserIcon } from 'ui/atoms/icons';

export const GenderOptions = Object.values(GenderType).map(gender => ({
  label: `dictionaries.gender.${gender}`,
  icon: <LockIcon />,
  value: gender,
}));

export const AdminPermissionsTypes = Object.values(AdminSettings).map(value => ({
  label: `dictionaries.settings.admin_groups.${value}`,
  icon: <UserIcon />,
  value,
}));
