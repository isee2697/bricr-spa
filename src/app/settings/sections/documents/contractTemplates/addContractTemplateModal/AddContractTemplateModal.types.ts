import { PromiseFunction } from 'app/shared/types';

export type AddContractTemplateModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: PromiseFunction<AddContractTemplateBody>;
};

export type AddContractTemplateBody = {
  name: string;
};
