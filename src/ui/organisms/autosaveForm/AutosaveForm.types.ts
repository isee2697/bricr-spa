import { FormProps } from 'react-final-form';

export type KeyValuesObject<T> = { [key: string]: T };

export type FormObject<T> = {
  values: KeyValuesObject<T>;
};

export type AutosaveProps = Omit<FormProps, 'onSubmit' | 'children'> & {
  children: React.ReactNode;
  onSave(values: unknown): void;
  timeout?: number;
};
