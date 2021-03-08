import { HeaderColumnItemType } from 'ui/molecules/columnModal/ColumnModal.types';

import { MarketingOpenHouseItem } from './MarketingOpenHouse.types';

export const MARKETING_OPEN_HOUSE_VISITED_MOVABLE_HEADER_COLUMNS: HeaderColumnItemType<MarketingOpenHouseItem>[] = [
  {
    value: 'property',
    hidden: false,
  },
  {
    value: 'date',
    hidden: false,
  },
  {
    value: 'status',
    hidden: false,
  },
  {
    value: 'price',
    hidden: false,
  },
  {
    value: 'result',
    hidden: false,
  },
];

export const MARKETING_OPEN_HOUSE_ORGANIZED_MOVABLE_HEADER_COLUMNS: HeaderColumnItemType<MarketingOpenHouseItem>[] = [
  {
    value: 'property',
    hidden: false,
  },
  {
    value: 'date',
    hidden: false,
  },
  {
    value: 'visitors',
    hidden: false,
  },
  {
    value: 'checked',
    hidden: false,
  },
  {
    value: 'result',
    hidden: false,
  },
];
