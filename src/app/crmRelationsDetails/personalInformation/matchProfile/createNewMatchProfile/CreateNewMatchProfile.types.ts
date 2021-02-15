import { UpdateMatchProfileInput } from 'api/types';
import { PromiseFunction } from 'app/shared/types';

export type CreateNewMatchProfileContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type CreateNewMatchProfileProps = CreateNewMatchProfileContainerProps & {};

export type SubSectionProps = {
  onSave: PromiseFunction<UpdateMatchProfileInput>;
};
