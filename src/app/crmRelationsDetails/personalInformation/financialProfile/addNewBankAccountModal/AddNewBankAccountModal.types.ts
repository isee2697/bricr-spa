import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { PromiseFunction } from 'app/shared/types';
import { BankType, CrmFinancial } from 'api/types';

export type AddNewBankAccountModalContainerProps = {
  id: string;
  data?: CrmFinancial;
};

export type AddNewBankAccountModalProps = ModalContainerProps & {
  onSubmit: PromiseFunction<AddNewBankAccountBody>;
};

export type AddNewBankAccountBody = {
  type: BankType;
};
