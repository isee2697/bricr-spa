import { FieldValidator } from 'final-form';

import { EntityWithFiles } from 'api/types';

type FieldValue = string[];

export type UploadImageGroupFieldProps = {
  validate?: FieldValidator<FieldValue>[];
  validateFields?: string[];
  name: string;
  max?: number;
  disabled?: boolean;
  entity: EntityWithFiles;
  entityID: string;
};
