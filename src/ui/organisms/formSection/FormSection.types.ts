import { ReactNode } from 'react';
import { ExpansionPanelSummaryProps } from '@material-ui/core/ExpansionPanelSummary';

export type FormSectionHeaderProps = ExpansionPanelSummaryProps & { editing: string };

export type FunctionChildren = (editing: boolean) => ReactNode;

export type FormSectionProps = {
  title: ReactNode;
  titleBadge?: number;
  isEditable?: boolean;
  onAdd?: VoidFunction;
  onOptionsClick?: VoidFunction;
  isExpandable?: boolean;
  isInitExpanded?: boolean;
  children: FunctionChildren | ReactNode;
  className?: string;
  isInitEditing?: boolean;
  buttons?: ReactNode;
  loading?: boolean;
};

export type FormSectionRef = {
  handleSetEdit: (value: boolean) => void;
  handleSetExpanded: (value: boolean) => void;
};
