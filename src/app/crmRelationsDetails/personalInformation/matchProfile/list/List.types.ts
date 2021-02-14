import { MatchProfile } from 'api/types';
import { CrmItem } from 'app/crm/Crm.types';

export type ListProps = ListContainerProps & {
  matchProfiles: MatchProfile[];
};

export type ListContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  crm: CrmItem;
};
