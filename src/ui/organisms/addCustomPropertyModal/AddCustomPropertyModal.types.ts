import { InspectionType, LabelInput, LabelProperty } from 'api/types';

export type AddCustomPropertyModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  property: LabelProperty;
  type?: InspectionType;
};

export type AddCustomPropertyModalProps = Omit<AddCustomPropertyModalContainerProps, 'property'> & {
  onSubmit: (input: Pick<LabelInput, 'text' | 'icon'>) => {};
};
