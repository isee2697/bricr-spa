import React from 'react';
import { TeamRight } from 'api/types';
import { AddIcon, DeleteIcon, LockIcon, EditIcon, SeeIcon } from 'ui/atoms/icons';

export const TeamRightsOptions = Object.values(TeamRight).map(right => ({
  label: `dictionaries.settings.rights.${right}`,
  icon: <LockIcon />,
  value: right,
}));

export const UserPermissions = [
  { label: 'dictionaries.settings.rights.Create', icon: <AddIcon />, value: 'createPermission' },
  { label: 'dictionaries.settings.rights.Read', icon: <SeeIcon />, value: 'readPermission' },
  { label: 'dictionaries.settings.rights.Update', icon: <EditIcon />, value: 'updatePermission' },
  { label: 'dictionaries.settings.rights.Delete', icon: <DeleteIcon />, value: 'deletePermission' },
];
