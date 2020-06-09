import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

export type AddCostModalProps = AddCostModalContainerProps & {
  onAddCost: () => void;
  options: RadioDataType[];
};

export type AddCostModalContainerProps = {
  isModalOpened: boolean;
  onModalClose: () => void;
};
