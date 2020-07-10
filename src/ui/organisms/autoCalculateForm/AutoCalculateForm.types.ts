import { ReactNode } from 'react';

export type AutoCalculateFormProps = {
  label: string;
  initValue: boolean;
  disabled: boolean;
  children: (isCalculated: boolean) => ReactNode;
  onChange: (isCalculated: boolean) => void;
  name?: string;
};
