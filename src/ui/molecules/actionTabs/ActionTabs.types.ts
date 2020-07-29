import { BadgeProps, TabProps } from '@material-ui/core';

export type ActionTabStatus = 'actionRequired' | 'active' | 'archived';

export type ActionTab = TabProps & {
  amount?: number;
  hasBadge?: boolean;
  badgeColor?: BadgeProps['color'];
  label: string;
};

export type ActionTabsProps<T> = {
  className?: string;
  status?: T;
  onStatusChange: (type: T) => void;
  tabs?: ActionTab[];
};
