import { ReactNode } from 'react';
import { FieldValidator } from 'final-form';

export type CheckboxDataType = {
  title: string;
  icon: ReactNode;
  value: string;
};

type FieldValue = string[];

export type CheckboxGroupFieldProps = {
  validate?: FieldValidator<FieldValue>[];
  validateFields?: string[];
  name: string;
  options: CheckboxDataType[];
};
