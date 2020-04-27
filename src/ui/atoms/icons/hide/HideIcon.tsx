import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core';

export const HideIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 7.625C4 7.27982 4.29848 7 4.66667 7H19.3333C19.7015 7 20 7.27982 20 7.625C20 7.97018 19.7015 8.25 19.3333 8.25H4.66667C4.29848 8.25 4 7.97018 4 7.625ZM4 11.9998C4 11.6547 4.29848 11.3748 4.66667 11.3748H19.3333C19.7015 11.3748 20 11.6547 20 11.9998C20 12.345 19.7015 12.6248 19.3333 12.6248H4.66667C4.29848 12.6248 4 12.345 4 11.9998ZM11.9997 15.7502C11.6315 15.7502 11.333 16.03 11.333 16.3752C11.333 16.7203 11.6315 17.0002 11.9997 17.0002H19.333C19.7012 17.0002 19.9997 16.7203 19.9997 16.3752C19.9997 16.03 19.7012 15.7502 19.333 15.7502H11.9997Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
