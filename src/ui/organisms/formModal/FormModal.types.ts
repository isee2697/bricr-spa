import { ReactNode } from 'react';

import { ModalContainerProps } from 'ui/molecules/modal/Modal.types';

export type FormModalProps<T> = ModalContainerProps & {
  title?: string;
  children?: ReactNode;
  onSubmit: (data: T) => Promise<undefined | { error: boolean }>;
  addText?: string;
};
