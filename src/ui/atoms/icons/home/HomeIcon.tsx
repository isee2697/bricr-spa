import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const HomeIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5778 4.15725C11.8234 3.94758 12.1766 3.94758 12.4222 4.15725L19.7555 10.4181C20.0404 10.6614 20.0824 11.0997 19.8493 11.397C19.6161 11.6944 19.1961 11.7382 18.9112 11.4949L12 5.59448L5.08884 11.4949C4.80388 11.7382 4.38387 11.6944 4.15071 11.397C3.91756 11.0997 3.95957 10.6614 4.24453 10.4181L11.5778 4.15725ZM10 15.1304C10 14.7462 10.2985 14.4348 10.6667 14.4348H13.3333C13.7015 14.4348 14 14.7462 14 15.1304V18.6087H16.6666V12.3478C16.6666 11.9636 16.9651 11.6522 17.3333 11.6522C17.7015 11.6522 18 11.9636 18 12.3478V19.3043C18 19.6885 17.7015 20 17.3333 20H13.3333H10.6667H6.66667C6.29848 20 6 19.6885 6 19.3043V12.3478C6 11.9636 6.29848 11.6522 6.66667 11.6522C7.03485 11.6522 7.33333 11.9636 7.33333 12.3478V18.6087H10V15.1304ZM11.3333 18.6087H12.6667V15.8261H11.3333V18.6087Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
