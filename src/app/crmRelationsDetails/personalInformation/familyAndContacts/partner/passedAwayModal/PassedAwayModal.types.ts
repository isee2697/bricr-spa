import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { PromiseFunction } from 'app/shared/types';

export type PassedAwayModalProps = ModalContainerProps & {
  onSubmit: PromiseFunction<{ dateOfDeath: string }>;
};
