import { PromiseFunction } from 'app/shared/types';

import { AddLvzPropertyGroupBody } from './addLvzPropertyGroupModal/AddLvzPropertyGroupModal.types';

export type LvzPropertyProps = {
  groups: LvzPropertyGroup[];
  onAddLvzGroup: PromiseFunction<AddLvzPropertyGroupBody>;
};

export type LvzPropertyGroup = {
  id: string;
  name: string;
};
