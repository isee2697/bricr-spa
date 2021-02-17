import { MatchProfile, MatchProfileInput } from 'api/types';
import { PromiseFunction } from 'app/shared/types';

export type CreateNewMatchProfileContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type CreateNewMatchProfileProps = CreateNewMatchProfileContainerProps & {
  matchProfile?: MatchProfile;
  onSave: PromiseFunction<MatchProfileInput>;
};

export type SubSectionProps = {
  onSave: PromiseFunction<MatchProfileInput>;
};
