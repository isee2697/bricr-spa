import { Variant } from '@material-ui/core/styles/createTypography';
import { ReactNode } from 'react';

import { CrmDetailItem } from '../MergeCrmRelation.types';

export type TypographyItemProps = {
  source?: string | null;
  compare?: string | null;
  className?: string;
  variant?: Variant | 'srOnly' | 'inherit';
};

export type RelationCardProps = {
  title: string | ReactNode;
  crm: CrmDetailItem;
  compare?: CrmDetailItem;
  onCheck?: VoidFunction;
  isChecked?: boolean;
  showPercent?: boolean;
  children?: ReactNode;
};
