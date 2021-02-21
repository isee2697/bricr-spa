import { CrmListItem } from 'api/types';

export type BusinessesMenuProps = {
  item: CrmListItem;
  onMerge?: (id: string) => void;
  onEdit?: (id: string) => void;
  onMove?: (id: string) => void;
  onActive?: (id: string) => void;
  onDelete?: (id: string) => void;
};
