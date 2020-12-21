import { PromiseFunction } from 'app/shared/types';

export type ConditionsProps = {
  onSave: PromiseFunction<void>;
};

export enum InvoiceCondition {
  Invoice = 'Invoice',
  Credit = 'Credit',
}
