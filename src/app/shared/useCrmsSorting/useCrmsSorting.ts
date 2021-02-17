/* eslint-disable @typescript-eslint/camelcase */
import { SortDirection } from 'api/types';
import { useSorting } from 'hooks';

const SORTING_DATA = {
  last_created: { sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  first_created: { sortColumn: 'dateCreated', sortDirection: SortDirection.Asc },
};

const TABLE_SORTING_DATA = {
  firstName_down: { sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  firstName_up: { sortColumn: 'dateCreated', sortDirection: SortDirection.Asc },
  lastName_down: { sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  lastName_up: { sortColumn: 'dateCreated', sortDirection: SortDirection.Asc },
  email_down: { sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  email_up: { sortColumn: 'dateCreated', sortDirection: SortDirection.Asc },
  phoneNumber_down: { sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  phoneNumber_up: { sortColumn: 'dateCreated', sortDirection: SortDirection.Asc },
  partner_down: { sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  partner_up: { sortColumn: 'dateCreated', sortDirection: SortDirection.Asc },
  manager_down: { sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  manager_up: { sortColumn: 'dateCreated', sortDirection: SortDirection.Asc },
  property_down: { sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  property_up: { sortColumn: 'dateCreated', sortDirection: SortDirection.Asc },
  status_down: { sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  status_up: { sortColumn: 'dateCreated', sortDirection: SortDirection.Asc },
  initials_down: { sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  initials_up: { sortColumn: 'dateCreated', sortDirection: SortDirection.Asc },
  gender_down: { sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  gender_up: { sortColumn: 'dateCreated', sortDirection: SortDirection.Asc },
};

export const useCrmsSorting = (viewMode: 'list' | 'table') =>
  useSorting(viewMode === 'list' ? SORTING_DATA : TABLE_SORTING_DATA);
