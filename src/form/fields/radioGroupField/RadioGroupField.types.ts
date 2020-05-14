import { ReactNode } from 'react';
import { FieldValidator } from 'final-form';

export type RadioDataType = {
  title: string;
  icon: ReactNode;
  value: string;
};

type FieldValue = string;

export type RadioGroupFieldProps = {
  validate?: FieldValidator<FieldValue>[];
  validateFields?: string[];
  name: string;
  options: RadioDataType[];
  width?: boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
};
