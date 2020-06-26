import { ReactNode } from 'react';

export type FormSubSectionHeaderProps = {
  title: string;
  className?: string;
  subtitle?: ReactNode | string;
  noBorder?: boolean;
};
