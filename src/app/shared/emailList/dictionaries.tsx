import { HeaderColumnItemType } from 'ui/molecules/columnModal/ColumnModal.types';
import { FiltersTypes, FiltersSizes, Types } from 'ui/molecules/filters/Filters.types';

import { Email } from './EmailList.types';

export const EmailsFilters: FiltersTypes[] = [
  {
    key: 'date',
    type: Types.DateRange,
    size: FiltersSizes.L,
  },
  {
    key: 'name',
    type: Types.Text,
    size: FiltersSizes.M,
  },
];

export const EmailsTableHeaderColumns: HeaderColumnItemType<Email>[] = [
  {
    value: 'from',
    hidden: false,
  },
  {
    value: 'pinned',
    hidden: false,
  },
  {
    value: 'subject',
    hidden: false,
  },
  {
    value: 'links',
    hidden: false,
  },
  {
    value: 'date',
    hidden: false,
  },
];
