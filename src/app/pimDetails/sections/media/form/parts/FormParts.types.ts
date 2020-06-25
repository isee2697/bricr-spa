import { RadioDataType, Width } from 'form/fields/radioGroupField/RadioGroupField.types';

export type InputProps = {
  disabled: boolean;
  placeholder: string;
  name: string;
  label: string;
};

export type SingleChooseProps = {
  titleId: string;
  disabled: boolean;
  options: RadioDataType[];
  xs?: Width;
};

export type EditorProps = {
  titleId: string;
  disabled: boolean;
};
