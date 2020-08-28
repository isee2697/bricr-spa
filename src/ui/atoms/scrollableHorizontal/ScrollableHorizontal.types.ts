import { ReactNode } from 'react';

export type ScrollableHorizontalProps = {
  children: ReactNode;
  width: string | number;
  height: string | number;
  maxWidth?: string | number;
  className?: string;
};
