import { ReactNode } from 'react';
import { DialogProps } from '@material-ui/core/Dialog';

export type ModalProps = Omit<DialogProps, 'open' | 'title'> & {
  isOpened: boolean;
  title: ReactNode;
  children: ReactNode;
  titleClassName?: string;
};

export type ModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
};
