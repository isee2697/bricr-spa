import { Cost } from '../Costs.types';

export type FormProps = {
  cost: Cost;
  editing: boolean;
  onSave: () => Promise<undefined | { error: boolean }>;
};

export enum CostPaymentFrequency {
  Monthly = 'monthly',
  Yearly = 'yearly',
}
