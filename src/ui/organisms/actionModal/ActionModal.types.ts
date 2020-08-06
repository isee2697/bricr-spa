import { ReactNode } from 'react';

export type ActionModalProps = {
  title: string;
  isOpened: boolean;
  submitText: string;
  actions: { title: string; content: ReactNode }[];
  onClose: VoidFunction;
  onSubmit: VoidFunction;
};
