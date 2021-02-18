import { CrmItem } from 'app/crm/Crm.types';

export type BusinessesMenuProps = {
  item: CrmItem;
  onMerge?: (id: string) => void;
  onEdit?: (id: string) => void;
  onMove?: (id: string) => void;
  onActive?: (id: string) => void;
  onDelete?: (id: string) => void;
};
