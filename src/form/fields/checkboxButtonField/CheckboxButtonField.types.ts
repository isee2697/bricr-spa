import { ReactNode } from 'react';
import { FieldValidator } from 'final-form';
import { GridJustification, GridSpacing } from '@material-ui/core';
import { UseFieldConfig } from 'react-final-form';

export type RadioDataType = {
  label: string;
  icon?: ReactNode;
};

type Width = boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;

export type CheckboxButtonFieldProps = {
  validate?: FieldValidator<boolean>[];
  validateFields?: string[];
  name: string;
  option: RadioDataType;
  spacing?: GridSpacing;
  xs?: Width;
  sm?: Width;
  md?: Width;
  lg?: Width;
  disabled?: boolean;
  parse?: Function;
  actionElement?: ReactNode;
  justify?: GridJustification;
  onChange?: (selected: boolean) => void;
} & Pick<UseFieldConfig<boolean>, 'format'>;
