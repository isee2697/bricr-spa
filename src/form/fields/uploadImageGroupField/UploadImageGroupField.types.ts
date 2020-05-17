import { FieldValidator } from 'final-form';

type FieldValue = string[];

export type UploadImageGroupFieldProps = {
  validate?: FieldValidator<FieldValue>[];
  validateFields?: string[];
  name: string;
  max?: number;
};
