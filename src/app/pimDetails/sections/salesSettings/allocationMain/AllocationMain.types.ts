import { Allocate, AllocateInput } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';
import { PromiseResponse } from 'app/shared/types';

export type AllocationMainProps = PimDetailsSectionProps & {
  loadingList: boolean;
  loadingAllocate: boolean;
  criterias: Allocate[];
  selectedCriteria?: Allocate;
  onChangeTab: (criteriaId: string) => void;
  onSubmit: (criteriaId: string, values: AllocateInput) => PromiseResponse;
  onDelete: (criteriaId: string) => PromiseResponse;
};
