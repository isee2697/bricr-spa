import { CostType } from 'api/types';
import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

export type AddCostModalProps = {
  isModalOpened: boolean;
  costTypes: RadioDataType[];
  onModalClose: () => void;
  onAddCost: (values: CostForm) => Promise<undefined | { error: boolean }>;
};

export type AddCostModalContainerProps = {
  isModalOpened: boolean;
  onModalClose: () => void;
  onAdd: VoidFunction;
};

export type CostForm = {
  type: CostType;
  name?: string;
};
