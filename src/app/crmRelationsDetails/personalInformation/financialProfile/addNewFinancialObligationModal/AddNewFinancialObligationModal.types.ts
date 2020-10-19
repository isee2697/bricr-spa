import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { PromiseFunction } from 'app/shared/types';
import { FinancialObligationType } from '../financialObligations/FinancialObligations.types';

export type AddNewFinancialObligationModalProps = ModalContainerProps & {
  onSubmit: PromiseFunction<AddNewFinancialObligationBody>;
};

export type AddNewFinancialObligationBody = {
  obligationType: FinancialObligationType;
};
