import { ReactElement } from 'react';

import { MatchProfileMatch } from '../../MatchProfile.types';

export type ListItemProps = {
  checkbox: ReactElement;
  checked: boolean;
  item: MatchProfileMatch;
};
