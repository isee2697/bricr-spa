import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

export type CostsProps = PimDetailsSectionProps & {
  costs: Cost[];
  onSave: () => Promise<undefined | { error: boolean }>;
};

export type Cost = {
  id: string;
  title: string;
  type: string;
};
