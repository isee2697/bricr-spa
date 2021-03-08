import React from 'react';

import { ThumbDownIcon, ThumbUpIcon } from 'ui/atoms/icons';
import { HeaderColumnItemType } from 'ui/molecules/columnModal/ColumnModal.types';
import { FiltersSizes, FiltersTypes, Types } from 'ui/molecules/filters/Filters.types';
import { YesNo } from '../marketingOpenHouse/MarketingOpenHouse.types';

import { MarketingOpenHouseOrganizedItem } from './MarketingOpenHouseOrganized.types';

export const MARKETING_OPEN_HOUSE_ORGANIZED_MOVABLE_HEADER_COLUMNS: HeaderColumnItemType<
  MarketingOpenHouseOrganizedItem
>[] = [
  {
    value: 'name',
    hidden: false,
  },
  {
    value: 'gender',
    hidden: false,
  },
  {
    value: 'result',
    hidden: false,
  },
  {
    value: 'information',
    hidden: false,
  },
];

export const OpenHouseOrganizedFilters: FiltersTypes[] = [
  {
    key: 'result',
    type: Types.RadioButton,
    size: FiltersSizes.L,
    options: [
      { label: YesNo.Yes, value: YesNo.Yes, icon: <ThumbUpIcon /> },
      { label: YesNo.No, value: YesNo.No, icon: <ThumbDownIcon /> },
    ],
  },
  {
    key: 'date',
    type: Types.DateRange,
    size: FiltersSizes.L,
  },
];
