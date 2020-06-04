import { RadioDataType } from 'form/fields/radioGroupField/RadioGroupField.types';

export type LinksProps = {
  options: RadioDataType[];
  onAdd: VoidFunction;
  onSave: (e: object) => Promise<undefined | { error: boolean }>;
  links: Link[];
};

type Link = {
  name: string;
};
