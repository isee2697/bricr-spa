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
  MailIcon,
  MutationIcon,
} from 'ui/atoms/icons';

import { DocumentType } from './DocumentRights.types';

export const DocumentTypes: CheckboxDataType[] = [
  {
    value: DocumentType.Leaflet,
    icon: <AogIcon />,
    label: `dictionaries.document_type.${DocumentType.Leaflet}`,
  },
  {
    value: DocumentType.TitleDeed,
    icon: <BogIcon />,
    label: `dictionaries.document_type.${DocumentType.TitleDeed}`,
  },
  {
    value: DocumentType.MunicipalCharges,
    icon: <CalendarIcon />,
    label: `dictionaries.document_type.${DocumentType.MunicipalCharges}`,
  },
  {
    value: DocumentType.SignedDeedOfPurchase,
    icon: <ComplexBuildingIcon />,
    label: `dictionaries.document_type.${DocumentType.SignedDeedOfPurchase}`,
  },
  {
    value: DocumentType.InformationForm,
    icon: <EditIcon />,
    label: `dictionaries.document_type.${DocumentType.InformationForm}`,
  },
  {
    value: DocumentType.CadastralMap,
    icon: <FolderIcon />,
    label: `dictionaries.document_type.${DocumentType.CadastralMap}`,
  },
  {
    value: DocumentType.CadastralRegister,
    icon: <FilterIcon />,
    label: `dictionaries.document_type.${DocumentType.CadastralRegister}`,
  },
  {
    value: DocumentType.ServiceContract,
    icon: <MailIcon />,
    label: `dictionaries.document_type.${DocumentType.ServiceContract}`,
  },
  {
    value: DocumentType.DeedOfDivision,
    icon: <MutationIcon />,
    label: `dictionaries.document_type.${DocumentType.DeedOfDivision}`,
  },
];
