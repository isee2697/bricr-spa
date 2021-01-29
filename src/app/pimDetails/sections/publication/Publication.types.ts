import { DateTime } from 'luxon';

import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

export type PublicationProps = PimDetailsSectionProps & {
  items: PublicationItem[];
  onAddNewPublication: (values: AddNewPublicationBody) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
};

export type PublicationItem = {
  id: number;
  name: string;
  type: PublicationType;
  startDate: DateTime;
  endDate?: DateTime;
  status: PublicationStatus;
  isActive: boolean;
};

export type AddNewPublicationBody = {
  name: string;
  type: PublicationType;
};

export enum PublicationType {
  Funda = 'Funda',
  OwnWebsite = 'OwnWebsite',
  ExternalPlatform = 'ExternalPlatform',
  Facebook = 'Facebook',
  Instagram = 'Instagram',
  Twitter = 'Twitter',
}

export enum PublicationStatus {
  Success = 'Success',
  Error = 'Error',
  Warning = 'Warning',
}
