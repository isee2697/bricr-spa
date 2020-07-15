import { LabelInput, LabelProperty } from 'api/types';
import { EntityType } from 'app/shared/entityType';

export type AddCustomPropertyModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  property: LabelProperty;
  title?: string;
  labelId?: string;
  entityType?: EntityType;
};

export type AddCustomPropertyModalProps = Omit<AddCustomPropertyModalContainerProps, 'property'> & {
  onSubmit: (input: Pick<LabelInput, 'text' | 'icon'>) => {};
};
