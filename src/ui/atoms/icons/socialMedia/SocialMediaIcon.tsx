import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const SocialMediaIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon
      {...props}
      width={theme.spacing(6)}
      height={theme.spacing(6)}
      viewBox={`0 0 ${theme.spacing(6)} ${theme.spacing(6)}`}
    >
      <circle
        cx="29.4997"
        cy="17.8327"
        r="4.16667"
        fill={props.color ? props.color : theme.palette.gray.main}
        stroke="transparent"
      />
      <circle
        cx="29.4997"
        cy="31.1667"
        r="4.16667"
        fill={props.color ? props.color : theme.palette.gray.main}
        stroke="transparent"
      />
      <circle
        cx="17.8337"
        cy="24.5007"
        r="4.16667"
        fill={props.color ? props.color : theme.palette.gray.main}
        stroke="transparent"
      />
      <line
        x1="20.0758"
        y1="23.2373"
        x2="28.4091"
        y2="18.2373"
        fill="transparent"
        stroke={props.color ? props.color : theme.palette.gray.main}
      />
      <line
        x1="17.265"
        y1="24.908"
        x2="30.5983"
        y2="33.2414"
        fill="transparent"
        stroke={props.color ? props.color : theme.palette.gray.main}
      />
      <circle
        cx="24.5"
        cy="24.5"
        r="17"
        fill="transparent"
        stroke={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
