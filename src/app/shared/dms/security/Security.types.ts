import { LastUpdatedProfile } from 'api/types';
import { TemplateItem } from 'app/dms/dmsTemplateDetails/dmsTemplateConfigureSettingsDetails/DmsTemplateConfigureSettingsDetails.types';
import { PromiseFunction } from 'app/shared/types';

export type SecurityProps = {
  title: string;
  data: TemplateItem;
  onSave: PromiseFunction<TemplateItem>;
  updatedBy?: LastUpdatedProfile | null;
  dateUpdated?: string | null;
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
