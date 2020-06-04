import { ReactNode } from 'react';

export type FormProps = {
  title: string;
  children: ReactNode;
  initialValues: object;
  onSave: (values: object) => Promise<undefined | { error: boolean }>;
};
