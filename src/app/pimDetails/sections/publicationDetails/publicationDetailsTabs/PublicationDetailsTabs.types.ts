import { PublicationDetailsTab } from '../PublicationDetails.types';

export type PublicationDetailsTabsProps = {
  checklistCount: number;
  statusCount: number;
  status: PublicationDetailsTab;
  onStatusChange: (status: PublicationDetailsTab) => void;
};
