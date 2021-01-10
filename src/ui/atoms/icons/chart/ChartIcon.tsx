import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const ChartIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} width="45" height="45" viewBox="0 0 45 45">
      <rect width="45" height="45" rx="8" fill={theme.palette.gray.light} />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23 8.93937C15.6362 8.93937 9.66667 14.9089 9.66667 22.2727C9.66667 29.6365 15.6362 35.606 23 35.606C30.3638 35.606 36.3333 29.6365 36.3333 22.2727C36.3333 14.9089 30.3638 8.93937 23 8.93937ZM7 22.2727C7 13.4361 14.1634 6.27271 23 6.27271C31.8366 6.27271 39 13.4361 39 22.2727C39 31.1093 31.8366 38.2727 23 38.2727C14.1634 38.2727 7 31.1093 7 22.2727Z"
        fill={theme.palette.silver.main}
      />
      <path
        d="M22.7145 7.32019V21.9869M22.7145 21.9869L36.3335 28.2726M22.7145 21.9869L12.2383 32.463"
        stroke={theme.palette.silver.main}
      />
    </SvgIcon>
  );
};
