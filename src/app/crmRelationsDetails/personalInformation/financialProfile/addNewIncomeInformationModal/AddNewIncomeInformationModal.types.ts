import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { PromiseFunction } from 'app/shared/types';
import { IncomeInformationType } from '../incomeInformation/IncomeInformation.types';

export type AddNewIncomeInformationModalProps = ModalContainerProps & {
  onSubmit: PromiseFunction<AddNewIncomeInformationBody>;
};

export type AddNewIncomeInformationBody = {
  incomeInformationType: IncomeInformationType;
};
