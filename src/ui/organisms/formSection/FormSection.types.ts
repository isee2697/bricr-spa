import { ReactNode } from 'react';
import { ExpansionPanelSummaryProps } from '@material-ui/core/ExpansionPanelSummary';

export type FormSectionHeaderProps = ExpansionPanelSummaryProps & { editing: string };

export type FormSectionProps = {
  title: ReactNode;
  titleBadge?: number;
  isEditable?: boolean;
  onAdd?: VoidFunction;
  onOptionsClick?: VoidFunction;
  isExpandable?: boolean;
  isInitExpanded?: boolean;
  children: ((editing: boolean) => ReactNode) | ReactNode;
};
