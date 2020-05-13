import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const CheckMark = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="4" fill={props.color ? props.color : theme.palette.gray.main} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.6931 16.3336C10.306 16.7058 9.694 16.7058 9.30689 16.3335L5.72744 12.8918C5.33038 12.51 5.33038 11.8746 5.72744 11.4928C6.10307 11.1317 6.69692 11.1317 7.07256 11.4928L10 14.3077L16.9274 7.64669C17.3031 7.2855 17.8969 7.2855 18.2726 7.64669C18.6696 8.02848 18.6696 8.66383 18.2726 9.04562L10.6931 16.3336Z"
        fill={theme.palette.white.main}
      />
    </SvgIcon>
  );
};
