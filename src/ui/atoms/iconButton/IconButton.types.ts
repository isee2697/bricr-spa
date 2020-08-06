import { IconButtonProps as BaseIconButtonProps } from '@material-ui/core/IconButton';

export type IconButtonProps = BaseIconButtonProps & {
  variant?: 'rounded' | 'circle' | 'roundedContained' | 'circleContained';
  selected?: boolean;
};
