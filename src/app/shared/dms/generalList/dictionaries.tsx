import React from 'react';

import { HeaderColumnItemType } from 'ui/molecules/columnModal/ColumnModal.types';
import { FiltersTypes, FiltersSizes, Types } from 'ui/molecules/filters/Filters.types';

import { DocumentItem } from './GeneralList.types';

export const DmsGeneralListFilters: FiltersTypes[] = [
  {
    key: 'city',
    type: Types.Text,
    size: FiltersSizes.L,
  },
  {
    key: 'name',
    type: Types.Text,
    size: FiltersSizes.M,
  },
  {
    key: 'pricingRange',
    type: Types.Range,
    size: FiltersSizes.L,
    options: [
      { label: 'from', value: '0', icon: <></> },
      { label: 'to', value: '5000', icon: <></> },
    ],
  },
];

export const DmsGeneralTableHeaderColumns: HeaderColumnItemType<DocumentItem>[] = [
  {
    value: 'name',
    hidden: false,
  },
  {
    value: 'extension',
    hidden: false,
  },
  {
    value: 'documentType',
    hidden: false,
  },
  {
    value: 'isCreatedByBricr',
    hidden: false,
  },
  {
    value: 'dateUpdated',
    hidden: false,
  },
  {
    value: 'dateCreated',
    hidden: false,
  },
];
