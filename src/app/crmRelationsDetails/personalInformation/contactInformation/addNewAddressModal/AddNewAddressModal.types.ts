import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { PromiseFunction } from 'app/shared/types';
import { ContactAddressType } from 'api/types';

export type AddNewAddressModalProps = ModalContainerProps & {
  onSubmit: PromiseFunction<AddNewAddressBody>;
};

export type AddNewAddressBody = {
  addressType: ContactAddressType;
};
