import { ReactElement } from 'react';

import { BusinessJourneyTab, BusinessJourneyType } from '../BusinessJourney.types';

export type ListItemProps = {
  isShowListHeader: boolean;
  isShowNumber: boolean;
  checkbox: ReactElement;
  checked: boolean;
  status: BusinessJourneyTab;
  item: BusinessJourneyType & { index: number };
};
