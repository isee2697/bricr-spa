import { PromiseFunction } from 'app/shared/types';
import { TemplateItem } from '../../DmsTemplateConfigureSettingsDetails.types';

import { AddLvzPropertyGroupBody } from './addLvzPropertyGroupModal/AddLvzPropertyGroupModal.types';

export type LvzPropertyContainerProps = {
  template: TemplateItem;
};

export type LvzPropertyProps = {
  template: TemplateItem;
  groups: LvzPropertyGroup[];
  onAddLvzGroup: PromiseFunction<AddLvzPropertyGroupBody>;
};

export type LvzPropertyGroup = {
  id: string;
  name: string;
};
