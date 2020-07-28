import { IdentificationNumber, NcpCharacteristicsSections, Profile, ProjectPhase } from 'api/types';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

export type CharacteristicsProps = PimDetailsSectionProps & {
  dateUpdated?: string | null;
  updatedBy?: Profile | null;
  characteristicsSections: NcpCharacteristicsSections[];
  identificationNumbers: IdentificationNumber[];
  projectPhase?: ProjectPhase | null;
};

export const sectionsOrder = [
  NcpCharacteristicsSections.ProjectMarketing,
  NcpCharacteristicsSections.Measurements,
  NcpCharacteristicsSections.Energy,
  NcpCharacteristicsSections.Phase,
  NcpCharacteristicsSections.AccountManagers,
  NcpCharacteristicsSections.ClientInformation,
  NcpCharacteristicsSections.IdentificationNumber,
  NcpCharacteristicsSections.AttentionField,
  NcpCharacteristicsSections.InvoiceDetails,
];
