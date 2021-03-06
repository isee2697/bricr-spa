import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { Cost, LastUpdatedProfile, UpdateCostInput } from 'api/types';

export type CostsProps = CostContainerProps & {
  onSave: (values: UpdateCostInput) => Promise<undefined | { error: boolean }>;
  onDescriptionUpdate(values: unknown): Promise<undefined | { error: boolean }>;
};

export type CostContainerProps = PimDetailsSectionProps & {
  costs: Cost[];
  dateUpdated?: string | null;
  updatedBy?: LastUpdatedProfile | null;
  description: string;
};
