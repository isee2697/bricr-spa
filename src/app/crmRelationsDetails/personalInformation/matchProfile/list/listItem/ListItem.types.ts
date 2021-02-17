import { ReactElement } from 'react';

import { CrmItem } from 'app/crm/Crm.types';
import { MatchProfileMatch } from '../../MatchProfile.types';

export type ListItemProps = {
  checkbox: ReactElement;
  checked: boolean;
  item: MatchProfileMatch;
  crm: CrmItem;
};
