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

import { DmsDocumentType } from './Dms.types';

export const TemplateTypes = [
  {
    value: 'house',
    label: `dictionaries.propertyTypes.house`,
    icon: <AogIcon />,
  },
  {
    value: 'apartment',
    label: `dictionaries.propertyTypes.apartment`,
    icon: <BogIcon />,
  },
  {
    value: 'bog',
    label: `dictionaries.propertyTypes.bog`,
    icon: <CalendarIcon />,
  },
  {
    value: 'aog',
    label: `dictionaries.propertyTypes.aog`,
    icon: <ComplexBuildingIcon />,
  },
  {
    value: 'parkingLot',
    label: `dictionaries.propertyTypes.parkingLot`,
    icon: <EditIcon />,
  },
  {
    value: 'buildingPlot',
    label: `dictionaries.propertyTypes.buildingPlot`,
    icon: <FolderIcon />,
  },
  {
    value: 'relte',
    label: `dictionaries.propertyTypes.relte`,
    icon: <FilterIcon />,
  },
  {
    value: 'ncSale',
    label: `dictionaries.propertyTypes.ncSale`,
    icon: <MailIcon />,
  },
  {
    value: 'ncRent',
    label: `dictionaries.propertyTypes.ncRent`,
    icon: <MutationIcon />,
  },
];

export const TemplateRights = [
  {
    value: 'create',
    label: 'dictionaries.settings.rights.Create',
    icon: <AogIcon />,
  },
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

export const ContentBlockRights = [
  {
    value: 'create',
    label: 'dictionaries.settings.rights.Create',
    icon: <AogIcon />,
  },
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

export enum DmsSalesLeadsDocumentType {
  Brochure = 'Brochure',
  TitleDeed = 'TitleDeed',
  MunicipalCharges = 'MunicipalCharges',
  SignedDeedOfPurchase = 'SignedDeedOfPurchase',
  CadastralMap = 'CadastralMap',
}

export const DmsDocumentTypes: DmsDocumentType = {
  sales: {
    leads: Object.keys(DmsSalesLeadsDocumentType),
  },
};
