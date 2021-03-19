import { LabelInput } from 'api/types';

export type AddCustomDataButtonProps = {
  type: string;
  title: string;
  labelId?: string;
  disabled?: boolean;
  onAdd: (input: Pick<LabelInput, 'text' | 'icon'>) => {};
};

export type CustomData = {
  text?: string | null;
  icon?: string | null;
};
