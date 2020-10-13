import { ReactElement } from 'react';
import {
  CrmRelationsDetailsCustomerJourneyTab,
  CrmRelationsDetailsCustomerJourneyType,
} from '../CrmRelationsDetailsCustomerJourney.types';

export type ListItemProps = {
  isShowListHeader: boolean;
  isShowNumber: boolean;
  checkbox: ReactElement;
  checked: boolean;
  status: CrmRelationsDetailsCustomerJourneyTab;
  item: CrmRelationsDetailsCustomerJourneyType & { index: number };
};
