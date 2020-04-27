import { ReactElement } from 'react';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export type LinkTabProps = {
  label: string;
  to: string;
  className?: string;
  icon?: string | ReactElement;
  style?: CSSProperties;
};
