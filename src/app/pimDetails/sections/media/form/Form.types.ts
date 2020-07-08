import { ReactNode } from 'react';

export type FormProps<T> = {
  title: string;
  children: ReactNode;
  initialValues: object;
  onSave: (values: T) => Promise<undefined | { error: boolean }>;
  isInitiallyOpened?: boolean;
  counter?: number;
  isExpanded?: boolean;
  onExpand?: VoidFunction;
};
