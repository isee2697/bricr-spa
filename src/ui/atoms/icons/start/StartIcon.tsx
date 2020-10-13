import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

import * as React from 'react';

export const StartIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon viewBox="0 0 9 31" {...props}>
      <rect width="9" height="31" rx="2" fill={props.color ? props.color : theme.palette.gray.main} />
      <circle cx="4.5" cy="7.5" r="3.5" fill="white" />
      <circle cx="4.5" cy="15.5" r="3.5" fill="white" />
      <circle cx="4.5" cy="23.5" r="3.5" fill="white" />
    </SvgIcon>
  );
};
