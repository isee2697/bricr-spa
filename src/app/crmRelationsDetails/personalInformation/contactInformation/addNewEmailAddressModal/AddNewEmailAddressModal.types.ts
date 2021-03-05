import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { PromiseFunction } from 'app/shared/types';
import { ContactEmailAddressType, CrmContactInformation } from 'api/types';

export type AddNewEmailAddressModalContainerProps = {
  id: string;
  data?: CrmContactInformation;
};

export type AddNewEmailAddressModalProps = ModalContainerProps & {
  onSubmit: PromiseFunction<AddNewEmailAddressBody>;
};

export type AddNewEmailAddressBody = {
  emailAddressType: ContactEmailAddressType;
};
