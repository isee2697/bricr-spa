import { CrmStatus, CrmListItem } from 'api/types';

export type RelationsMenuProps = {
  item: CrmListItem;
  onMerge?: (id: string) => void;
  onEdit?: (id: string) => void;
  onMove?: (id: string) => void;
  onDelete?: (id: string) => void;
  onUpdateStatus?: (id: string, status: CrmStatus) => Promise<void>;
};
