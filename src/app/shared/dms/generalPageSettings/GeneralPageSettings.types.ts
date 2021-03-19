import { ReactNode } from 'react';

import { LastUpdatedProfile } from 'api/types';
import { PromiseFunction } from 'app/shared/types';
import { PageHeaderProps } from 'ui/templates/page/header/PageHeader.types';

export type GeneralPageSettingsProps = {
  types: string[];
  title: string;
  titleActions?: ReactNode;
  headerProps?: PageHeaderProps;
  onSave: PromiseFunction<void>;
  updatedBy?: LastUpdatedProfile | null;
  dateUpdated?: string | null;
};

export enum Languages {
  English = 'English',
  Dutch = 'Dutch',
}
