import { ReactNode } from 'react';

export type CardWithBodyProps = {
  titleId: string;
  titleActions?: ReactNode;
  children: ReactNode;
};
