import { ActiveTabStatus, DmsTemplateItem } from '../DmsTemplates.types';

export type DmsTemplatesItemProps = {
  template: DmsTemplateItem;
  onStatusChange: (status: ActiveTabStatus) => void;
  category: string;
};
