import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const StarFilledIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2.49023L15.09 8.75023L22 9.75423L17 14.6282L18.18 21.5102L12 18.2622L5.82 21.5102L7 14.6282L2 9.75423L8.91 8.75023L12 2.49023Z"
        stroke={props.color ? props.color : theme.palette.yellow.main}
        fill={props.color ? props.color : theme.palette.yellow.main}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};
