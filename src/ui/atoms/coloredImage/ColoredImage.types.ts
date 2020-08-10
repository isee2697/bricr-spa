import { BoxProps } from '@material-ui/core';

export type ImageContainerProps = BoxProps & {
  src?: string;
  variant?: 'green' | 'orange' | 'red' | 'purple' | 'blue';
  grayscale?: boolean;
  emptyEmoji?: string;
};
