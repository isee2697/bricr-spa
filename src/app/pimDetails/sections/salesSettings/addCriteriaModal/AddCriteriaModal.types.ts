import { AddAllocateInput } from 'api/types';
import { PromiseFunction } from 'app/shared/types';

export type AddCriteriaModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: PromiseFunction<AddAllocateInput>;
  isSubmitting?: boolean;
};
