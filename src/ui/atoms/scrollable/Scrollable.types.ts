import { ReactNode } from 'react';

export type ScrollableProps = {
  children: ReactNode;
  width: string | number;
  height: string | number;
  className?: string;
};
