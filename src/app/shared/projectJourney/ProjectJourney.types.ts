import { SortOption } from 'ui/molecules/list/List.types';

export type ProjectJourneyActionTabStatus = 'actionRequired' | 'matches' | 'interests';

export type ProjectJourneyItemData = {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  partner?: {
    name: string;
    image: string;
  };
  manager?: {
    name: string;
    image: string;
  };
  role: string;
  image: string;
};

export type ProjectJourneyData = {
  items: ProjectJourneyItemData[];
  projectLogo: string;
  phase?: string;
  designation?: string;
};

export type ProjectJourneyActionTabsProps = {
  status: ProjectJourneyActionTabStatus;
  onStatusChange: (status: ProjectJourneyActionTabStatus) => void;
  amounts?: {
    actionRequired: number;
    matches: number;
    interests: number;
  };
};

export type ProjectJourneyProps = {
  data: ProjectJourneyData;
  sorting: {
    sortOptions: SortOption[];
    onSort: (key: string) => void;
  };
} & ProjectJourneyActionTabsProps;
