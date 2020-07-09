import { RentPaymentFrequency, CostType } from 'api/types';

export type CostsProps = {
  costs: Cost[];
  onAddCost: (values: Cost) => Promise<undefined | { error: boolean }>;
};

export type Cost = {
  name?: string;
  type: CostType;
  serviceCostFrom?: number;
  serviceCostTill?: number;
  paymentFrequency?: RentPaymentFrequency;
  vatFrom?: number;
  vatTill?: number;
  vatPercentage?: 21 | 9 | 0;
  notes?: string;
};
