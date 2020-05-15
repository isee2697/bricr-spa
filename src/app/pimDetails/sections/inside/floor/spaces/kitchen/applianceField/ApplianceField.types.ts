import { ReactNode } from 'react';

export type ApplianceFieldProps = {
  name: string;
  label: string;
  icon: ReactNode;
  disabled?: boolean;
};
