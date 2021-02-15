import { PromiseFunction } from 'app/shared/types';

export type AddCriteriaModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: PromiseFunction<{ criteriaName: string }>;
  isSubmitting?: boolean;
};
