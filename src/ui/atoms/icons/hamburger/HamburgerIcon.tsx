import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const HamburgerIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <rect
        x="4"
        y="4"
        width="16"
        height="1.45"
        rx="0.725"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
      <rect
        x="4"
        y="8.5"
        width="16"
        height="1.45"
        rx="0.725"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
      <rect
        x="4"
        y="13"
        width="16"
        height="1.45"
        rx="0.725"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
      <rect
        x="4"
        y="17.5"
        width="16"
        height="1.45"
        rx="0.725"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
