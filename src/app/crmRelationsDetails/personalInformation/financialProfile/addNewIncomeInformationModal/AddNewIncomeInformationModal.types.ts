import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { PromiseFunction } from 'app/shared/types';
import { CrmFinancial, IncomeType } from 'api/types';

export type AddNewIncomeInformationModalContainerProps = {
  id: string;
  data?: CrmFinancial;
};

export type AddNewIncomeInformationModalProps = ModalContainerProps & {
  onSubmit: PromiseFunction<AddNewIncomeInformationBody>;
};

export type AddNewIncomeInformationBody = {
  incomeType: IncomeType;
};
