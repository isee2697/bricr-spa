import { ObjectTypeGeneral } from 'api/types';

export type AddNewObjectTypeModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: (values: ObjectTypeGeneral) => Promise<undefined | { error: boolean }>;
};

export type AddNewObjectTypeModalContainerProps = Pick<AddNewObjectTypeModalProps, 'isOpened' | 'onClose'>;
