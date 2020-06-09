import { ReactNode } from 'react';
import { FieldValidator } from 'final-form';
import { GridJustification, GridSpacing } from '@material-ui/core';
import { UseFieldConfig } from 'react-final-form';

export type RadioDataType = {
  label: string;
  icon?: ReactNode;
  value: string;
};

type Width = boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
type FieldValue = string;

export type RadioGroupFieldProps = {
  validate?: FieldValidator<FieldValue>[];
  validateFields?: string[];
  name: string;
  options: RadioDataType[];
  spacing?: GridSpacing;
  xs?: Width;
  sm?: Width;
  md?: Width;
  lg?: Width;
  disabled?: boolean;
  parse?: Function;
  actionElement?: ReactNode;
  justify?: GridJustification;
} & Pick<UseFieldConfig<string>, 'format'>;
