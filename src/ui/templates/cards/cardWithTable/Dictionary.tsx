import React from 'react';

import { InvoiceItemStatus } from 'app/shared/dms/cardItems/invoiceItem/InvoiceItem.types';
import { BuildingIcon } from 'ui/atoms/icons';
import { ActionTab } from 'ui/molecules/actionTabs/ActionTabs.types';
import { FiltersSizes, FiltersTypes, Types } from 'ui/molecules/filters/Filters.types';

export const FileFilters: FiltersTypes[] = [
  {
    key: 'fileSize',
    type: Types.Range,
    size: FiltersSizes.L,
    options: [
      { label: 'from', value: '0', icon: <></> },
      { label: 'to', value: '5000', icon: <></> },
    ],
  },
  {
    key: 'fileType',
    type: Types.Checkbox,
    size: FiltersSizes.M,
    options: [
      { label: 'pdf', value: 'pdf', icon: <BuildingIcon /> },
      { label: 'png', value: 'png', icon: <BuildingIcon /> },
      { label: 'jpg', value: 'jpg', icon: <BuildingIcon /> },
      { label: 'docx', value: 'docx', icon: <BuildingIcon /> },
      { label: 'xlsx', value: 'xlsx', icon: <BuildingIcon /> },
    ],
  },
];

export const EmailFilters: FiltersTypes[] = [
  {
    key: 'fileSize',
    type: Types.Range,
    size: FiltersSizes.L,
    options: [
      { label: 'from', value: '0', icon: <></> },
      { label: 'to', value: '5000', icon: <></> },
    ],
  },
  {
    key: 'from',
    type: Types.Checkbox,
    size: FiltersSizes.M,
    options: [
      { label: 'name', value: 'from.name', icon: <BuildingIcon /> },
      { label: 'email', value: 'from.email', icon: <BuildingIcon /> },
    ],
  },
];

export const InvoicesTabs: ActionTab[] = Object.keys(InvoiceItemStatus).map(tab => ({
  value: tab,
  label: tab,
  hasBadge: tab === InvoiceItemStatus.ActionRequired,
  badgeColor: 'error',
}));
