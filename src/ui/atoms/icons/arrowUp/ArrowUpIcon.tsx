import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const ArrowUpIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.95625 14.47C7.53997 15.136 8.01881 16 8.80425 16H15.1958C15.9812 16 16.46 15.136 16.0438 14.47L12.848 9.3568C12.4563 8.73013 11.5437 8.73013 11.152 9.3568L7.95625 14.47Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
