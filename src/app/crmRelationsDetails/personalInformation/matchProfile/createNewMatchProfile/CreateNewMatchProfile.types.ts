import { MatchProfile, AddMatchProfileInput, UpdateMatchProfileInput } from 'api/types';
import { PromiseFunction } from 'app/shared/types';

export type CreateNewMatchProfileContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type CreateNewMatchProfileProps = CreateNewMatchProfileContainerProps & {
  matchProfile?: MatchProfile;
  onSave: PromiseFunction<AddMatchProfileInput | UpdateMatchProfileInput>;
};

export type SubSectionProps = {
  onSave: PromiseFunction<AddMatchProfileInput | UpdateMatchProfileInput>;
};
