import { PaginationProps } from 'ui/atoms/pagination/Pagination.types';
import { FiltersTypes } from 'ui/molecules/filters/Filters.types';
import { SortOption } from 'ui/molecules/list/List.types';

export type MarketingSurveyContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type MarketingSurveyProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  items: SurveyItem[];
  activeFilters: ListSurveyFilters;
  onFilter: (filters: ListSurveyFilters) => void;
  status: SurveyStatus;
  onStatusChange: (status: SurveyStatus) => void;
  pagination: PaginationProps;
  sortColumn: string;
  sorting: {
    sortOptions: SortOption[];
    onSort: (key: string) => void;
  };
};

export enum SurveyCategory {
  Nps = 'Nps',
  Viewing = 'Viewing',
  Process = 'Process',
}

export enum SurveyType {
  Branding = 'Branding',
  House = 'House',
  Bog = 'Bog',
  Aog = 'Aog',
  ParkingLot = 'ParkingLot',
  BuildingPlot = 'BuildingPlot',
  Project = 'Project',
}

export enum SurveyStatus {
  Pending = 'Pending',
  Complete = 'Complete',
}

export enum SurveyInviteType {
  Viewing = 'Viewing',
  Project = 'Project',
  SellingProcess = 'SellingProcess',
  RentingProcess = 'RentingProcess',
}

export type SurveyItem = {
  id: string;
  name: string;
  sent: string;
  completed: string;
  category: SurveyCategory;
  type: SurveyType;
  version?: string;
  score: number;
  note?: string;
};

export type ListSurveyFilters = {};

export const SurveyFilters: FiltersTypes[] = [];
