import { ReactNode } from 'react';

export type SectionProps = {
  count: number;
  children?: (editing: boolean) => ReactNode;
  icon: string;
  title: string;
  emptyLineFirst: string;
  emptyLineSecond: string;
  onAdd: VoidFunction;
  isExpandable?: boolean;
  buttons?: ReactNode;
};
