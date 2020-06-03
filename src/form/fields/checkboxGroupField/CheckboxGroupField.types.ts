import { ReactNode } from 'react';
import { FieldValidator } from 'final-form';

export type CheckboxDataType = {
  label: string;
  icon: ReactNode;
  value: string;
};

type FieldValue = string[];

type Width = boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;

export type CheckboxGroupFieldProps = {
  validate?: FieldValidator<FieldValue>[];
  validateFields?: string[];
  name: string;
  options: CheckboxDataType[];
  xs?: Width;
  sm?: Width;
  md?: Width;
  lg?: Width;
  disabled?: boolean;
  orientation?: 'vertical' | 'horizontal';
};
