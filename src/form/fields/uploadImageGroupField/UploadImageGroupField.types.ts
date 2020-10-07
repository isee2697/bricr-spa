import { FieldValidator } from 'final-form';

import { EntityWithFiles, EntityWithMultipleFiles } from 'api/types';

type FieldValue = File[];

export type UploadImageGroupFieldProps = {
  validate?: FieldValidator<FieldValue>[];
  validateFields?: string[];
  name: string;
  max?: number;
  disabled?: boolean;
  entity: EntityWithFiles;
  entityID: string;
  removeEntity: EntityWithMultipleFiles;
  mainName?: string;
};
