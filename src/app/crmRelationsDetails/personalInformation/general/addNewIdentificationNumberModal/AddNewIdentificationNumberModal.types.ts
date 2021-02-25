import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { PromiseFunction } from 'app/shared/types';
import { IdentificationNumberType } from 'api/types';

export type AddNewIdentificationNumberModalProps = ModalContainerProps & {
  onSubmit: PromiseFunction<AddNewIdentificationNumberBody>;
};

export type AddNewIdentificationNumberBody = {
  type: IdentificationNumberType;
};
