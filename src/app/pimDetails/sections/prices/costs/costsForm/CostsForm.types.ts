import { Cost, UpdateCostInput } from 'api/types';

export type FormProps = {
  cost: Cost;
  editing: boolean;
  onSave: (values: UpdateCostInput) => Promise<undefined | { error: boolean }>;
  toggled: boolean;
  onCostClick: VoidFunction;
  counter: number;
};
