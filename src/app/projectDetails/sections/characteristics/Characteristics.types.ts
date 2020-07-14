import { IdentificationNumber, NcpCharacteristicsInput, NcpCharacteristicsSections, Profile } from 'api/types';

export type CharacteristicsProps = {
  dateUpdated?: string | null;
  updatedBy?: Profile | null;
  characteristicsSections: NcpCharacteristicsSections[];
  identificationNumbers: IdentificationNumber[];
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

export type FormValues = NcpCharacteristicsInput & {
  phase: {
    name: string;
  };
};
