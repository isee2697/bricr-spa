import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { ReactElement } from 'react';

export type LinkTabProps = {
  label: string;
  to: string;
  className?: string;
  icon?: string | ReactElement;
  style?: CSSProperties;
};
