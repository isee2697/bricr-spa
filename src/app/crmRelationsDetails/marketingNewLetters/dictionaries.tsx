import React from 'react';

import { HomeIcon, SquareIcon } from 'ui/atoms/icons';
import { HeaderColumnItemType } from 'ui/molecules/columnModal/ColumnModal.types';
import { FiltersTypes, Types, FiltersSizes } from 'ui/molecules/filters/Filters.types';

import { MarketingNewsLetterEventType, MarketingNewsLetterItem, YesNo } from './MarketingNewLetter.types';

export const MARKETING_NEWSLETTER_MOVABLE_HEADER_COLUMNS: HeaderColumnItemType<MarketingNewsLetterItem>[] = [
  {
    value: 'name',
    hidden: false,
  },
  {
    value: 'sent',
    hidden: false,
  },
  {
    value: 'bounced',
    hidden: false,
  },
  {
    value: 'opened',
    hidden: false,
  },
  {
    value: 'event',
    hidden: false,
  },
];

export const MarketingNewsLetterEventFilters: FiltersTypes[] = [
  {
    key: 'bounced',
    type: Types.RadioButton,
    size: FiltersSizes.L,
    options: [
      {
        label: YesNo.Yes,
        value: YesNo.Yes,
        icon: <SquareIcon />,
      },
      {
        label: YesNo.No,
        value: YesNo.No,
        icon: <SquareIcon />,
      },
    ],
  },
  {
    key: 'opened',
    type: Types.RadioButton,
    size: FiltersSizes.L,
    options: [
      {
        label: YesNo.Yes,
        value: YesNo.Yes,
        icon: <SquareIcon />,
      },
      {
        label: YesNo.No,
        value: YesNo.No,
        icon: <SquareIcon />,
      },
    ],
  },
  {
    key: 'event',
    type: Types.Checkbox,
    size: FiltersSizes.M,
    options: [
      {
        label: MarketingNewsLetterEventType.ClickThrough,
        value: MarketingNewsLetterEventType.ClickThrough,
        icon: <HomeIcon />,
      },
      {
        label: MarketingNewsLetterEventType.FormFilledIn,
        value: MarketingNewsLetterEventType.FormFilledIn,
        icon: <HomeIcon />,
      },
    ],
  },
];
