import { ReactNode } from 'react';

export type FormSubSectionProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  onOptionsClick: VoidFunction;
  counter?: number;
  initiallyOpened?: boolean;
  isExpanded?: boolean;
  onExpand?: VoidFunction;
  customOption?: ReactNode;
};
