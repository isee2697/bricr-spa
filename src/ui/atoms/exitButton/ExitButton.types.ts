import { SvgIconProps } from '@material-ui/core/SvgIcon/SvgIcon';
import { Path } from 'history';

export type ExitButtonProps = SvgIconProps & {
  to?: Path;
};
