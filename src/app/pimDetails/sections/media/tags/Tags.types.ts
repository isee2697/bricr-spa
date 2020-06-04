import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

export type TagsProps = {
  options: RadioDataType[];
  onAdd: VoidFunction;
  onSave: () => Promise<undefined | { error: boolean }>;
  tags: Tag[];
};

type Tag = {
  name: string;
};
