import { CostType } from 'api/types';

export type AddCostModalProps = {
  isModalOpened: boolean;
  onModalClose: () => void;
  onAddCost: (values: CostForm) => Promise<undefined | { error: boolean }>;
};

export type AddCostModalContainerProps = {
  isModalOpened: boolean;
  onModalClose: () => void;
  pimId?: string;
  onAdd: VoidFunction;
};

export type CostForm = {
  type: CostType;
  name: string;
};
