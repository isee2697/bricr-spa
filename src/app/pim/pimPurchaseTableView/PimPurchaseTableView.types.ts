import { Pim } from 'api/types';

export type PimPurchaseTableViewFixedHeader = 'address' | 'nr' | 'tv' | 'postalCode' | 'city' | 'salePrice' | 'status';

export type PimPurchaseTableViewViewProps = {
  items: Pim[];
  onClick?: (id: string) => void;
  onArchive?: VoidFunction;
  onEdit?: VoidFunction;
  onDelete?: VoidFunction;
  selected: string[];
  onSelectItem: (id: string) => void;
  onSelectAllItems: VoidFunction;
};
