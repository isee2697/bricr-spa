import { CrmStatus } from 'api/types';
import { CrmItem } from 'app/crm/Crm.types';

export type RelationsMenuProps = {
  item: CrmItem;
  onMerge?: (id: string) => void;
  onEdit?: (id: string) => void;
  onMove?: (id: string) => void;
  onDelete?: (id: string) => void;
  onUpdateStatus?: (id: string, status: CrmStatus) => Promise<void>;
};
