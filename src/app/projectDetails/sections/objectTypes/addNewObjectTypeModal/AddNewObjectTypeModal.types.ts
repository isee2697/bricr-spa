import { AnyObject } from 'react-final-form';

export type AddNewObjectTypeModalProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  onSubmit: (values: AnyObject) => Promise<undefined | { error: boolean }>;
};

export type AddNewObjectTypeModalContainerProps = Pick<AddNewObjectTypeModalProps, 'isOpened' | 'onClose'>;
