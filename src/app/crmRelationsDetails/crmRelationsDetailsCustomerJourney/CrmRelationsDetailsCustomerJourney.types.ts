import { CrmItem } from '../../crm/Crm.types';

export type CrmRelationsDetailsCustomerJourneyProps = {
  crm: CrmItem;
};

export enum CrmRelationsDetailsCustomerJourneyTab {
  Matches = 'matches',
  Interests = 'interests',
  Viewings = 'viewings',
  Biddings = 'biddings',
  Candidate = 'candidate',
  Optant = 'optant',
}
