import React from 'react';

import { CheckboxDataType } from 'form/fields/checkboxGroupField/CheckboxGroupField.types';
import {
  AogIcon,
  BogIcon,
  CalendarIcon,
  ComplexBuildingIcon,
  EditIcon,
  FilterIcon,
  FolderIcon,
  MutationIcon,
} from 'ui/atoms/icons';

import { RolesForDocument } from './DocumentDetails.types';

export const Roles: CheckboxDataType[] = [
  {
    value: RolesForDocument.Interest,
    icon: <AogIcon />,
    label: `dictionaries.roles_for_document.${RolesForDocument.Interest}`,
  },
  {
    value: RolesForDocument.Reserve,
    icon: <BogIcon />,
    label: `dictionaries.roles_for_document.${RolesForDocument.Reserve}`,
  },
  {
    value: RolesForDocument.Candidate,
    icon: <CalendarIcon />,
    label: `dictionaries.roles_for_document.${RolesForDocument.Candidate}`,
  },
  {
    value: RolesForDocument.Optant,
    icon: <ComplexBuildingIcon />,
    label: `dictionaries.roles_for_document.${RolesForDocument.Optant}`,
  },
  {
    value: RolesForDocument.Buyer,
    icon: <EditIcon />,
    label: `dictionaries.roles_for_document.${RolesForDocument.Buyer}`,
  },
  {
    value: RolesForDocument.Seller,
    icon: <FolderIcon />,
    label: `dictionaries.roles_for_document.${RolesForDocument.Seller}`,
  },
  {
    value: RolesForDocument.Tenant,
    icon: <FilterIcon />,
    label: `dictionaries.roles_for_document.${RolesForDocument.Tenant}`,
  },
  {
    value: RolesForDocument.PrincipalProperty,
    icon: <MutationIcon />,
    label: `dictionaries.roles_for_document.${RolesForDocument.PrincipalProperty}`,
  },
];
