import { QuotationsTabStatus, SalesQuotation } from '../Quotations.types';

export type ListViewProps = {
  items: SalesQuotation[];
  status: QuotationsTabStatus;
  sortType: string;
  onChangeSortType: (sortType: string) => void;
};
