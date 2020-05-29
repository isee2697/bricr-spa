import { ReactNode } from 'react';

export type AppliancesFieldItem = {
  label: string;
  icon: ReactNode;
  value: string;
};

export type AppliancesFieldProps = {
  name: string;
  disabled: boolean;
  options: AppliancesFieldItem[];
};
