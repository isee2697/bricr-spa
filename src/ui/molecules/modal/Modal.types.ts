import { ReactNode } from 'react';
import { DialogProps } from '@material-ui/core/Dialog';

export type ModalProps = Omit<DialogProps, 'open'> & {
  isOpened: boolean;
  title: ReactNode;
  children: ReactNode;
};
