import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const StampIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        d="M18.7273 16.4545H6V14.5513C6 13.79 6.71102 13.2825 7.63535 13.2825H11.4749V11.3088C10.8349 10.8741 9.73286 9.82148 9.73286 8.10154C9.73286 6.38159 11.0127 5 12.4347 5C13.8568 5 14.9944 6.40979 14.9944 8.10154C14.9944 9.79329 13.9042 10.9446 13.3591 11.3088V13.2825H17.2697C18.2936 13.2825 18.668 14.2459 18.7273 14.7276V16.4545Z"
        stroke={props.color ? props.color : theme.palette.gray.main}
        fill={theme.palette.white.main}
      />
      <path
        d="M17.5 17.5908C17.2982 18.1222 16.7843 18.4999 16.1822 18.4999H8.54581C7.94366 18.4999 7.42974 18.1222 7.228 17.5908H17.5Z"
        stroke={props.color ? props.color : theme.palette.gray.main}
        strokeWidth="0.954545"
      />
    </SvgIcon>
  );
};
