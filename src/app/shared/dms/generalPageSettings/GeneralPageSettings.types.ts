import { ReactNode } from 'react';

import { LastUpdatedProfile } from 'api/types';
import { PromiseFunction } from 'app/shared/types';
import { PageHeaderProps } from 'ui/templates/page/header/PageHeader.types';
import { TemplateItem } from '../../../dms/dmsTemplateDetails/dmsTemplateConfigureSettingsDetails/DmsTemplateConfigureSettingsDetails.types';

export type GeneralPageSettingsProps = {
  types: string[];
  title?: string;
  data?: TemplateItem;
  titleActions?: ReactNode;
  headerProps?: PageHeaderProps;
  onSave: PromiseFunction<TemplateItem>;
  updatedBy?: LastUpdatedProfile | null;
  dateUpdated?: string | null;
};

export enum Languages {
  English = 'English',
  Dutch = 'Dutch',
}
