import { EmailAddressType } from '../emailAddresses/EmailAddresses.types';
import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { PromiseFunction } from 'app/shared/types';

export type AddNewEmailAddressModalProps = ModalContainerProps & {
  onSubmit: PromiseFunction<AddNewEmailAddressBody>;
};

export type AddNewEmailAddressBody = {
  emailAddressType: EmailAddressType;
};
