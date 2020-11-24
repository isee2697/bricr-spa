import { FieldValidator } from 'final-form';

import { EntityWithFiles, File } from 'api/types';

export type UploadImageFieldProps = {
  name: string;
  classes?: UploadImageFieldClasses;
  validate?: FieldValidator<File>[];
  validateFields?: string[];
  disabled?: boolean;
  onRemove?: VoidFunction;
  entity: EntityWithFiles;
  entityID: string;
  type?: UploadImageFieldTypes;
  initialFileName?: string;
  label?: string;
  onSetBackground?: (value: string) => void;
  showCheckbox?: boolean;
  isChecked?: boolean;
  onCheck?: () => void;
  permission?: 'private' | 'public';
};

export type UploadImageFieldClasses = {
  root?: string;
  item?: string;
  empty?: string;
};

export enum UploadImageFieldTypes {
  DENSE = 'dense',
  BLOCK = 'block',
}
