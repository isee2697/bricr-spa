import { AddressType } from '../addresses/Addresses.types';
import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { PromiseFunction } from 'app/shared/types';

export type AddNewAddressModalProps = ModalContainerProps & {
  onSubmit: PromiseFunction<AddNewAddressBody>;
};

export type AddNewAddressBody = {
  addressType: AddressType;
};
