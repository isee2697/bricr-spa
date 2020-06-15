import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { Cost, UpdateCostInput } from 'api/types';

export type CostsProps = PimDetailsSectionProps & {
  costs: Cost[];
  onSave: (values: UpdateCostInput) => Promise<undefined | { error: boolean }>;
};

export type CostContainerProps = PimDetailsSectionProps & {
  costs: Cost[];
};
