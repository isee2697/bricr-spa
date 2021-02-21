import { Allocate, AllocateInput } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PromiseResponse } from 'app/shared/types';

export type AllocationMainProps = PimDetailsSectionProps & {
  criterias: Allocate[];
  onSubmit: (criteriaId: string, values: AllocateInput) => PromiseResponse;
};
