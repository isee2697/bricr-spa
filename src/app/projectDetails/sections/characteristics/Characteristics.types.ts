import { NcpCharacteristicsSections, Profile } from 'api/types';

export type CharacteristicsProps = {
  dateUpdated?: string | null;
  updatedBy?: Profile | null;
  characteristicsSections: NcpCharacteristicsSections[];
};
