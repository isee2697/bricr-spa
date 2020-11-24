import { ListNcp } from 'api/types';

export type ProjectItemProps = ListNcp & {
  onDelete: VoidFunction;
  onArchive: VoidFunction;
};
