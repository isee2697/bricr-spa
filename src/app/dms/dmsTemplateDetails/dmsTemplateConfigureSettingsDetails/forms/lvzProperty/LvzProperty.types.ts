import { PromiseFunction } from 'app/shared/types';

import { AddLvzPropertyGroupBody } from './addLvzPropertyGroupModal/AddLvzPropertyGroupModal.types';
import { DmsTemplateItem } from './../../../../dmsTemplates/DmsTemplates.types';

export type LvzPropertyContainerProps = {
  template: DmsTemplateItem;
};

export type LvzPropertyProps = {
  template: DmsTemplateItem;
  groups: LvzPropertyGroup[];
  onAddLvzGroup: PromiseFunction<AddLvzPropertyGroupBody>;
};

export type LvzPropertyGroup = {
  id: string;
  name: string;
};
