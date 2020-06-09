import { FieldValidator } from 'final-form';

export type UploadImageFieldProps = {
  name: string;
  validate?: FieldValidator<string>[];
  validateFields?: string[];
  disabled?: boolean;
  onRemove?: VoidFunction;
  type?: UploadImageFieldTypes;
  initialFileName?: string;
  label?: string;
};

export enum UploadImageFieldTypes {
  DENSE = 'dense',
  BLOCK = 'block',
}
