import { Sort } from 'api/types';

export type AddMapModalProps = {
  onClose: VoidFunction;
  isOpened: boolean;
  sortQuery: Sort;
};
