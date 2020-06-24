import { CheckboxDataType } from 'form/fields/checkboxGroupField/CheckboxGroupField.types';
import { LabelProperty } from 'api/types';

export type SpecialSubsectionProps = {
  title: string;
  subSectionTitle: string;
  subSectionSubtitle: string;
  actionGroupName: string;
  actionGroupType: 'checkbox' | 'radio';
  options: CheckboxDataType[];
  inputName: string;
  label: string;
  placeholder: string;
  isDisabled: boolean;
  labelPropertyType: LabelProperty;
};
