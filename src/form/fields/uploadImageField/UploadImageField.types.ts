import { FieldValidator } from 'final-form';

export type UploadImageFieldProps = {
  name: string;
  value?: string;
  error?: boolean;
  validate?: FieldValidator<string>[];
  validateFields?: string[];
};
