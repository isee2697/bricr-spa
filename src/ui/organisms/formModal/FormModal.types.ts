import { AnyObject } from 'react-final-form';
import { ReactNode } from 'react';

import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';
import { PromiseFunction } from 'app/shared/types';

export type FormModalProps<T> = ModalContainerProps & {
  title?: string;
  children?: ReactNode;
  onSubmit: PromiseFunction<T>;
  addText?: string;
  initialValues?: T;
  mutators?: AnyObject;
};
