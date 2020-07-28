import { CharacteristicsSections } from 'api/types';
import { EntityType } from 'app/shared/entityType';

export type AdditionalInformationVisibility = {
  sections: CharacteristicsSections[];
};

export type AdditionalInformationModalContainerProps = {
  isOpened: boolean;
  onClose: (sections?: CharacteristicsSections[]) => void;
  sections: CharacteristicsSections[];
  availableSections: CharacteristicsSections[];
  entityType: EntityType;
};

export type AdditionalInformationModalProps = {
  availableSections: CharacteristicsSections[];
  initialValues: AdditionalInformationVisibility;
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: (values: AdditionalInformationVisibility) => Promise<undefined | { error: boolean }>;
};
