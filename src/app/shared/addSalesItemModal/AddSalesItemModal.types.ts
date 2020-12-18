import { PromiseFunction } from '../types';
import { ModalStateOptions } from 'context/modal/modalContext/ModalContext.types';

export enum SalesOrderType {
  HouseForSale = 'HouseForSale',
  Appraisal = 'Appraisal',
  Purchase = 'Purchase',
  HouseForRent = 'HouseForRent',
  BogForSale = 'BogForSale',
}

export type AddSalesItemModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: PromiseFunction<AddSalesItemBody>;
  options?: ModalStateOptions;
};

export type AddSalesItemBody = {
  type: string;
  extraInfo: string;
};

export enum SalesItemType {
  Acquisition = 'Acquisition',
  Quotation = 'Quotation',
  Order = 'Order',
  Invoice = 'Invoice',
}
