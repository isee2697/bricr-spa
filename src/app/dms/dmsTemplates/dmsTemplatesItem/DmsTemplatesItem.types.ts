import { TemplateItem } from 'app/dms/dmsTemplateDetails/dmsTemplateConfigureSettingsDetails/DmsTemplateConfigureSettingsDetails.types';
import { ActiveTabStatus, DmsTemplateItem } from '../DmsTemplates.types';

export type DmsTemplatesItemProps = {
  template: TemplateItem;
  onStatusChange: (status: ActiveTabStatus) => void;
  category: string;
};
