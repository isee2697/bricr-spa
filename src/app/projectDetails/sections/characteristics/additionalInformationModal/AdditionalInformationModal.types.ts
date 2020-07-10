import { NcpCharacteristicsSections } from 'api/types';

export type AdditionalInformationVisibility = {
  sections: NcpCharacteristicsSections[];
};

export type AdditionalInformationModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  sections: NcpCharacteristicsSections[];
};

export type AdditionalInformationModalProps = {
  initialValues: AdditionalInformationVisibility;
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: (values: AdditionalInformationVisibility) => Promise<undefined | { error: boolean }>;
};
