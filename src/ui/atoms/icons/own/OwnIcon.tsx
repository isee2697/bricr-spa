import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const OwnIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="3.5"
        fill={props.fill ? props.fill : theme.palette.gray.light}
        stroke={props.stroke ? props.stroke : theme.palette.gray.main}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6.75C11.5858 6.75 11.25 7.08579 11.25 7.5V11.25L7.5 11.25C7.08579 11.25 6.75 11.5858 6.75 12C6.75 12.4142 7.08579 12.75 7.5 12.75H11.25V16.5C11.25 16.9142 11.5858 17.25 12 17.25C12.4142 17.25 12.75 16.9142 12.75 16.5V12.75H16.5C16.9142 12.75 17.25 12.4142 17.25 12C17.25 11.5858 16.9142 11.25 16.5 11.25L12.75 11.25V7.5C12.75 7.08579 12.4142 6.75 12 6.75Z"
        stroke={props.stroke ? props.stroke : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
