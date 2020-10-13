import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

import * as React from 'react';

export const ManualIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon viewBox="0 0 30 30" {...props}>
      <rect
        x="1.41421"
        y="14.8496"
        width="19"
        height="19"
        transform="rotate(-45 1.41421 14.8496)"
        stroke={props.color ? props.color : theme.palette.gray.main}
        strokeWidth="2"
      />
    </SvgIcon>
  );
};
