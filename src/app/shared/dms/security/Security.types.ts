import { PromiseFunction } from 'app/shared/types';

export type SecurityProps = {
  title: string;
  onSave: PromiseFunction<void>;
  data: SecurityData;
};

export type PermissionsInTemplates = {
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
};

export type DocumentRight = {
  id: string;
  name: string;
  permissions: PermissionsInTemplates;
};

export type SecurityData = {
  documentRights: DocumentRight[];
};
