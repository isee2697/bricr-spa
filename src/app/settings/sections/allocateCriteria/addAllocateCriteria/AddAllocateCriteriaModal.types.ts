import { TeamRight } from 'api/types';
import { PromiseFunction } from 'app/shared/types';

export type AddAllocateCriteriaModalProps = {
  onSubmit: PromiseFunction<AddAllocateCriteriaBody>;
};

export type AddAllocateCriteriaBody = {
  typeOfProperty: TeamRight;
  title: string;
};
