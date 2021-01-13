import React from 'react';

import { palette } from 'theme/palette';
import { BuildingIcon, NewConstructionIcon } from 'ui/atoms/icons';
import { DocumentType } from '../checklistList/ChecklistList.types';

export const DocumentTypes = [
  {
    type: DocumentType.AnnualStatementLastYear,
    translation: 'checklist_item',
    icon: <BuildingIcon color="inherit" />,
    color: palette.red,
    disabled: false,
  },
  {
    type: DocumentType.SalarySlip,
    translation: 'checklist',
    icon: <NewConstructionIcon color="inherit" />,
    color: palette.green,
    disabled: false,
  },
  {
    type: DocumentType.DriversLicence,
    translation: 'checklist',
    icon: <NewConstructionIcon color="inherit" />,
    color: palette.green,
    disabled: false,
  },
  {
    type: DocumentType.PersonalId,
    translation: 'checklist',
    icon: <NewConstructionIcon color="inherit" />,
    color: palette.green,
    disabled: false,
  },
  {
    type: DocumentType.BankStatement,
    translation: 'checklist',
    icon: <NewConstructionIcon color="inherit" />,
    color: palette.green,
    disabled: false,
  },
];
