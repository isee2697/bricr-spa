import { CrmStatus } from 'api/types';
import { CrmItem } from 'app/crm/Crm.types';

export type RelationsMenuItemsProps = {
  item: CrmItem;
  onMerge?: (id: string) => void;
  onMove?: (id: string) => void;
  onUpdateStatus?: (id: string, status: CrmStatus) => Promise<void>;
};
