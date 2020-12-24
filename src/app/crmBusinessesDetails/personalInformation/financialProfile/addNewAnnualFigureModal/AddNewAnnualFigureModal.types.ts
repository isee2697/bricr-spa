import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { PromiseFunction } from 'app/shared/types';
import { AnnualFigureType } from '../annualFigures/AnnualFigures.types';

export type AddNewAnnualFigureModalProps = ModalContainerProps & {
  onSubmit: PromiseFunction<AddNewAnnualFigureBody>;
};

export type AddNewAnnualFigureBody = {
  annualFigureType: AnnualFigureType;
};
