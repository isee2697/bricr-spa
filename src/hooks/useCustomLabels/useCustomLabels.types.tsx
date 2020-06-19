import { LabelProperty } from '../../api/types';
import { RadioDataType } from '../../form/fields/radioGroupField/RadioGroupField.types';

export type CustomRadioDataType = RadioDataType & {
  property: LabelProperty;
};
export type CustomRadioDataTypeRecord = {
  [Key in LabelProperty]?: RadioDataType[];
};
