import { PhoneNumberType } from '../phoneNumbers/PhoneNumbers.types';
import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { PromiseFunction } from 'app/shared/types';

export type AddNewPhoneNumberModalProps = ModalContainerProps & { onSubmit: PromiseFunction<AddNewPhoneNumberBody> };

export type AddNewPhoneNumberBody = {
  phoneNumberType: PhoneNumberType;
};
