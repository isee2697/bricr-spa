import { FiltersTypes, FiltersSizes, Types } from 'ui/molecules/filters/Filters.types';

export const ListViewFilters: FiltersTypes[] = [
  {
    key: 'date',
    type: Types.Date,
    size: FiltersSizes.L,
  },
  {
    key: 'name',
    type: Types.Text,
    size: FiltersSizes.M,
  },
];
