import { CheckboxDataType } from 'form/fields/checkboxGroupField/CheckboxGroupField.types';
import { RadioDataType, Width } from 'form/fields/radioGroupField/RadioGroupField.types';

export type FieldChangeProps = {
  valuesLabel: string;
  fieldLabelId: string;
  fieldPlaceholderId: string;
  valuesFieldName: string;
  fieldName: string;
  checkOptions?: CheckboxDataType[];
  radioOptions?: RadioDataType[];
  type?: 'text' | 'checkfield' | 'checkgroup' | 'radiogroup' | 'dateRange';
  xs?: Width;
  sm?: Width;
  md?: Width;
  lg?: Width;
};
