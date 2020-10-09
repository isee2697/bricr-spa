import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const ArrowDownIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.0438 9.53C16.46 8.86395 15.9812 8 15.1958 8L8.80425 8C8.01881 8 7.53997 8.86395 7.95625 9.53L11.152 14.6432C11.5437 15.2699 12.4563 15.2699 12.848 14.6432L16.0438 9.53Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
