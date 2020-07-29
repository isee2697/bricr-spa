import { ReactNode } from 'react';
import { ExpansionPanelSummaryProps } from '@material-ui/core/ExpansionPanelSummary';

export type FormSectionHeaderProps = ExpansionPanelSummaryProps & { editing: string };

export type FunctionChildren = (editing: boolean) => ReactNode;

export type FormSectionBaseProps = {
  title: ReactNode;
  titleBadge?: number;
  isEditable?: boolean;
  onAdd?: VoidFunction;
  onOptionsClick?: VoidFunction;
  onSettingsClick?: VoidFunction;
  isExpandable?: boolean;
  isInitExpanded?: boolean;
  className?: string;
  isInitEditing?: boolean;
  buttons?: ReactNode;
  loading?: boolean;
};

export type FormSectionProps = FormSectionBaseProps & {
  children: FunctionChildren | ReactNode;
};

export type FormSectionRef = {
  handleSetEdit: (value: boolean) => void;
  handleSetExpanded: (value: boolean) => void;
};
