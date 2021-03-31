import { MatchProfile } from 'api/types';
import { CrmItem } from 'app/crm/Crm.types';
import { PromiseFunction } from 'app/shared/types';

export type ListProps = ListContainerProps & {
  matchProfiles: MatchProfile[];
  onCloneMatchProfile: PromiseFunction<string>;
  onDeleteMatchProfile: PromiseFunction<string>;
};

export type ListContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  crm: CrmItem;
};
