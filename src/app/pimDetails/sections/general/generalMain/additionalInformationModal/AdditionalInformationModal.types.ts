import { PimGeneral } from 'api/types';

export type AdditionalInformationVisibility = {
  visibility: ('showExtraAddress' | 'showIdentificationNumber' | 'showAttentionNote')[];
};

export type AdditionalInformationModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  pimGeneral: PimGeneral;
};

export type AdditionalInformationModalProps = {
  initialValues: AdditionalInformationVisibility;
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: (values: AdditionalInformationVisibility) => Promise<undefined | { error: boolean }>;
};
