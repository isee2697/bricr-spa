/* eslint-disable @typescript-eslint/camelcase */
import { SortDirection } from 'api/types';
import { useSorting } from 'hooks';

const SORTING_DATA = {
  last_created: { sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  first_created: { sortColumn: 'dateCreated', sortDirection: SortDirection.Asc },
};

const TABLE_SORTING_DATA = {
  last_created: { sortColumn: 'dateCreated', sortDirection: SortDirection.Desc },
  first_created: { sortColumn: 'dateCreated', sortDirection: SortDirection.Asc },
  firstName_down: { sortColumn: 'firstName', sortDirection: SortDirection.Desc },
  firstName_up: { sortColumn: 'firstName', sortDirection: SortDirection.Asc },
  lastName_down: { sortColumn: 'lastName', sortDirection: SortDirection.Desc },
  lastName_up: { sortColumn: 'lastName', sortDirection: SortDirection.Asc },
  email_down: { sortColumn: 'email', sortDirection: SortDirection.Desc },
  email_up: { sortColumn: 'email', sortDirection: SortDirection.Asc },
  phoneNumber_down: { sortColumn: 'phoneNumber', sortDirection: SortDirection.Desc },
  phoneNumber_up: { sortColumn: 'phoneNumber', sortDirection: SortDirection.Asc },
  status_down: { sortColumn: 'status', sortDirection: SortDirection.Desc },
  status_up: { sortColumn: 'status', sortDirection: SortDirection.Asc },
  initials_down: { sortColumn: 'initials', sortDirection: SortDirection.Desc },
  initials_up: { sortColumn: 'initials', sortDirection: SortDirection.Asc },
  gender_down: { sortColumn: 'gender', sortDirection: SortDirection.Desc },
  gender_up: { sortColumn: 'gender', sortDirection: SortDirection.Asc },
};

export const useCrmsSorting = (viewMode: 'list' | 'table') =>
  useSorting(viewMode === 'list' ? SORTING_DATA : TABLE_SORTING_DATA);
