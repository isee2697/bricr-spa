import { ReactNode } from 'react';
import { ExpansionPanelSummaryProps } from '@material-ui/core/ExpansionPanelSummary';

export type FormSectionHeaderProps = ExpansionPanelSummaryProps & { editing: string };

export type FormSectionProps = {
  title: string;
  isEditable?: boolean;
  onAdd?: () => void;
  isExpandable?: boolean;
  children: (editing: boolean) => ReactNode;
};
