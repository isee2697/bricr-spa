import React from 'react';

import {
  AogIcon,
  BogIcon,
  CalendarIcon,
  ComplexBuildingIcon,
  EditIcon,
  FilterIcon,
  FolderIcon,
  MailIcon,
  MutationIcon,
} from 'ui/atoms/icons';

export const DocumentRoleTypes = [
  {
    value: 'interest',
    label: `dictionaries.roleTypes.interest`,
    icon: <AogIcon />,
  },
  {
    value: 'reserve',
    label: `dictionaries.roleTypes.reserve`,
    icon: <BogIcon />,
  },
  {
    value: 'candidate',
    label: `dictionaries.roleTypes.candidate`,
    icon: <CalendarIcon />,
  },
  {
    value: 'optant',
    label: `dictionaries.roleTypes.optant`,
    icon: <ComplexBuildingIcon />,
  },
  {
    value: 'buyer',
    label: `dictionaries.roleTypes.buyer`,
    icon: <EditIcon />,
  },
  {
    value: 'seller',
    label: `dictionaries.roleTypes.seller`,
    icon: <FolderIcon />,
  },
  {
    value: 'tenant',
    label: `dictionaries.roleTypes.tenant`,
    icon: <FilterIcon />,
  },
  {
    value: 'mandaatgever',
    label: `dictionaries.roleTypes.mandaatgever`,
    icon: <MutationIcon />,
  },
];

export const DocumentRightTypes = [
  {
    value: 'brochure',
    label: `dictionaries.rightTypes.brochure`,
    icon: <AogIcon />,
  },
  {
    value: 'eigendomsbewijs',
    label: `dictionaries.rightTypes.eigendomsbewijs`,
    icon: <BogIcon />,
  },
  {
    value: 'gemeentelijke-lasten',
    label: `dictionaries.rightTypes.gemeentelijke_lasten`,
    icon: <CalendarIcon />,
  },
  {
    value: 'getekende-koopakte',
    label: `dictionaries.rightTypes.getekende_koopakte`,
    icon: <ComplexBuildingIcon />,
  },
  {
    value: 'inlichtingen-formulier',
    label: `dictionaries.rightTypes.inlichtingen_formulier`,
    icon: <EditIcon />,
  },
  {
    value: 'kdastrale-kaart',
    label: `dictionaries.rightTypes.kdastrale_kaart`,
    icon: <FolderIcon />,
  },
  {
    value: 'kadastrale-legger',
    label: `dictionaries.rightTypes.kadastrale_legger`,
    icon: <FilterIcon />,
  },
  {
    value: 'opdracht-tot-dienstverlening',
    label: `dictionaries.rightTypes.opdracht_tot_dienstverlening`,
    icon: <MailIcon />,
  },
  {
    value: 'splitsingsakte',
    label: `dictionaries.rightTypes.splitsingsakte`,
    icon: <MutationIcon />,
  },
];

export const DocumentSecureTypes = [
  {
    value: 'read',
    label: 'dictionaries.settings.rights.Read',
    icon: <BogIcon />,
  },
  {
    value: 'update',
    label: 'dictionaries.settings.rights.Update',
    icon: <CalendarIcon />,
  },
  {
    value: 'delete',
    label: 'dictionaries.settings.rights.Delete',
    icon: <ComplexBuildingIcon />,
  },
];

export const DocumentActionTypes = [
  {
    value: 'naar-funda',
    label: `dictionaries.actionTypes.naar_funda`,
    icon: <AogIcon />,
  },
  {
    value: 'send-with-viewing1',
    label: 'dictionaries.actionTypes.send_with_viewing1',
    icon: <BogIcon />,
  },
  {
    value: 'send-with-viewing2',
    label: 'dictionaries.actionTypes.send_with_viewing2',
    icon: <CalendarIcon />,
  },
  {
    value: 'common',
    label: 'dictionaries.actionTypes.common',
    icon: <ComplexBuildingIcon />,
  },
];
