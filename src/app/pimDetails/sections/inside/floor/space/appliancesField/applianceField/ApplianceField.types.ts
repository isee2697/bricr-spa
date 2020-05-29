import { ReactNode } from 'react';

export type ApplianceFieldProps = {
  name: string;
  onClick: VoidFunction;
  isSelected: boolean;
  label: string;
  icon: ReactNode;
  disabled?: boolean;
};
