import { IdentificationNumber, NcpCharacteristicsSections, Profile, ProjectPhase } from 'api/types';

export type CharacteristicsProps = {
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
