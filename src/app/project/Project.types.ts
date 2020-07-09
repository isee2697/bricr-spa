import { SortOption } from 'ui/molecules/list/List.types';
import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { ActionTabStatus } from 'ui/molecules/actionTabs/ActionTabs.types';

export type ProjectData = {
  id: string;
  dateCreated: string;
  dateUpdated: string;
  name: string;
  measurements: {
    surfaceFrom: number;
    surfaceTo: number;
    roomsFrom: number;
    roomsTo: number;
  };
  mainImage: string;
  logo: string;
  mainColor: string;
  subColor: string;
  amountOfProperties: number;
  amountOfObjectTypes: number;
  availableProperties: number;
  underOptionProperties: number;
  soldProperties: number;
  rentedProperties: number;
  amountOfMatches: number;
  amountOfInterests: number;
  amountOfCandidates: number;
  amountOfOptands: number;
  prices: {
    rentFrom: number;
    rentTo: number;
    saleFrom: number;
    saleTo: number;
  };
  amountOfPhases: number;
};

export type ListProject = {
  listProject: ProjectData[];
};

export type ProjectProps = {
  type: string;
  onTypeChange: (type: string) => void;
  status: ActionTabStatus;
  onStatusChange: (type: ActionTabStatus) => void;
  isLoading: boolean;
  isError: boolean;
  amounts?: {
    actionRequired: number;
    active: number;
    archived: number;
  };
  listData?: ListProject;
  sorting: {
    sortOptions: SortOption[];
    onSort: (key: string) => void;
  };
  pagination: PaginationProps;
};
