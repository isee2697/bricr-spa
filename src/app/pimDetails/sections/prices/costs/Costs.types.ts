import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { Cost, Profile, UpdateCostInput } from 'api/types';

export type CostsProps = CostContainerProps & {
  onSave: (values: UpdateCostInput) => Promise<undefined | { error: boolean }>;
};

export type CostContainerProps = PimDetailsSectionProps & {
  costs: Cost[];
  dateUpdated?: string | null;
  updatedBy?: Profile | null;
};
