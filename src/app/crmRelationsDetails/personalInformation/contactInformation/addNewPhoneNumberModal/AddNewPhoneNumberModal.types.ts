import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { PromiseFunction } from 'app/shared/types';
import { ContactPhoneNumberType, CrmContactInformation } from 'api/types';

export type AddNewPhoneNumberModalContainerProps = {
  id: string;
  data?: CrmContactInformation;
};

export type AddNewPhoneNumberModalProps = ModalContainerProps & { onSubmit: PromiseFunction<AddNewPhoneNumberBody> };

export type AddNewPhoneNumberBody = {
  phoneNumberType: ContactPhoneNumberType;
};
