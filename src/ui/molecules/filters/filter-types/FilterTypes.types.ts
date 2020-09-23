import { ChangeEvent, ReactNode } from 'react';
import { FieldValidator } from 'final-form';

export type RangeProps = {
  title: string;
  valueStart: number;
  valueEnd: number;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  fromPlaceholderId?: string;
  toPlaceholderId?: string;
  suffix?: string;
};

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
  actionElement?: ReactNode;
  orientation?: 'vertical' | 'horizontal';
  onChange: (e: string[]) => void;
};

export type SelectCardProps = {
  children: ReactNode;
  onClick: VoidFunction;
  className?: string;
  withButton?: boolean;
  fullWidth?: boolean;
  centered?: boolean;
  selected?: boolean;
  disabled?: boolean;
  adornment?: (selected: boolean) => ReactNode;
};
