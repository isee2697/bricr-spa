import { ReactNode } from 'react';

export type FormSubSectionProps = {
  title: string;
  className?: string;
  subtitle?: ReactNode | string;
  noBorder?: boolean;
};
