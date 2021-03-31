import { ReactNode } from 'react';

export type CardWithBodyProps = {
  title?: string;
  titleId?: string;
  titleAmount?: number | string;
  titleActions?: ReactNode;
  children: ReactNode;
  bodyClass?: string;
  titleClass?: string;
};
