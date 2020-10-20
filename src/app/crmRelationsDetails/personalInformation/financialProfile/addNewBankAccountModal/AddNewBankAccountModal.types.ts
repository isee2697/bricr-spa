import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { PromiseFunction } from 'app/shared/types';
import { BankAccountType } from '../bankAccounts/BankAccounts.types';

export type AddNewBankAccountModalProps = ModalContainerProps & {
  onSubmit: PromiseFunction<AddNewBankAccountBody>;
};

export type AddNewBankAccountBody = {
  bankAccountType: BankAccountType;
};
