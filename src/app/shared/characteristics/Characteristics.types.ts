import { CharacteristicsSections, IdentificationNumber, LastUpdatedProfile, ProjectPhase } from 'api/types';
import { EntityType } from 'app/shared/entityType';
import { PimDetailsSectionProps } from 'app/pimDetails/PimDetails.types';

export type CharacteristicsProps = PimDetailsSectionProps & {
  dateUpdated?: string | null;
  updatedBy?: LastUpdatedProfile | null;
  characteristicsSections: CharacteristicsSections[];
  identificationNumbers: IdentificationNumber[];
  projectPhase?: ProjectPhase | null;
  availableSections: CharacteristicsSections[];
  entityType: EntityType;
};

export const sectionsOrder = [
  CharacteristicsSections.ProjectMarketing,
  CharacteristicsSections.Measurements,
  CharacteristicsSections.Energy,
  CharacteristicsSections.Phase,
  CharacteristicsSections.AccountManagers,
  CharacteristicsSections.ObjectTypes,
  CharacteristicsSections.ClientInformation,
  CharacteristicsSections.IdentificationNumber,
  CharacteristicsSections.AttentionField,
  CharacteristicsSections.InvoiceDetails,
];
