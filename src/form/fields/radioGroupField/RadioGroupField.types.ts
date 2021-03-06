import { ReactNode } from 'react';
import { FieldValidator } from 'final-form';
import { GridJustification, GridSpacing } from '@material-ui/core';
import { UseFieldConfig } from 'react-final-form';

export type RadioDataType = {
  label: string;
  icon?: ReactNode;
  value: string;
  isCustom?: boolean;
};

export type Width = boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
type FieldValue = string;

export type RadioGroupFieldClasses = {
  group?: string;
  groupItem?: string;
  option?: string;
};

export type RadioGroupFieldProps = {
  labelId?: string;
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
  onChange?: (item: RadioDataType) => void;
  classes?: RadioGroupFieldClasses;
  optionType?: 'tile' | 'checkbox';
  orientation?: 'vertical' | 'horizontal';
} & Pick<UseFieldConfig<string>, 'format'>;

export type RadioGroupFieldStylesProps = {
  tileHeight: number;
};
