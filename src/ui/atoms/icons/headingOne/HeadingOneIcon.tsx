import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

import * as React from 'react';

export const HeadingOneIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        d="M13.2901 6.42782V17.1542H10.6772V12.7384H6.61284V17.1542H4V6.42782H6.61284V10.6297H10.6772V6.42782H13.2901Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
      <path
        d="M14.6415 8.42946V5.99998H18.874V17.1542H16.1542V8.42946H14.6415Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
