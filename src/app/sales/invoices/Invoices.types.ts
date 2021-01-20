import { InvoicesStatus, SalesInvoice } from 'app/crmRelationsDetails/sales/invoices/Invoices.types';

export type InvoicesContainerProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type InvoicesProps = {
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
  status: InvoicesStatus;
  onChangeStatus: (status: InvoicesStatus) => void;
  invoices: SalesInvoice[];
  viewMode: 'list' | 'table';
  onViewModeChange: (viewMode: 'list' | 'table') => void;
};
