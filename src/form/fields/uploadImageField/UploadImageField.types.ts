import { FieldValidator } from 'final-form';

export type UploadImageFieldProps = {
  name: string;
  validate?: FieldValidator<string>[];
  validateFields?: string[];
};
