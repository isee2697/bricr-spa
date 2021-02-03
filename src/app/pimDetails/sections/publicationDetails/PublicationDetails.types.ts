import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

export type PublicationDetailsProps = PimDetailsSectionProps & {};

export enum PublicationDetailsTab {
  Checklist = 'Checklist',
  Settings = 'Settings',
  Status = 'Status',
}
