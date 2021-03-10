import { ReactNode } from 'react';

export type CardWithBodyProps = {
  titleId?: string;
  titleNode?: ReactNode;
  titleActions?: ReactNode;
  children: ReactNode;
  bodyClass?: string;
  titleClass?: string;
};
