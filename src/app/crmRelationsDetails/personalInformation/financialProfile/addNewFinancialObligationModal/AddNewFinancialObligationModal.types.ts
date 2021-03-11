import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { PromiseFunction } from 'app/shared/types';
import { CrmFinancial, FinancialObligationType } from 'api/types';

export type AddNewFinancialObligationModalContainerProps = {
  id: string;
  data?: CrmFinancial;
};

export type AddNewFinancialObligationModalProps = ModalContainerProps & {
  onSubmit: PromiseFunction<AddNewFinancialObligationBody>;
};

export type AddNewFinancialObligationBody = {
  obligationType: FinancialObligationType;
};
