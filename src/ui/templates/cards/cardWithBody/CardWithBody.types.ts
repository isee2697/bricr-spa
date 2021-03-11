import { ReactNode } from 'react';

export type CardWithBodyProps = {
  titleId?: string;
  titleAmount?: number | string;
  titleActions?: ReactNode;
  children: ReactNode;
  bodyClass?: string;
  titleClass?: string;
};
