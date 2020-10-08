import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const LockIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3189 4.50015H12.253C11.2679 4.49121 10.3195 4.87341 9.61592 5.56295C8.91153 6.25325 8.51011 7.19505 8.5 8.18125V10.75H6.625C6.27982 10.75 6 11.0298 6 11.375V18.875C6 19.2202 6.27982 19.5 6.625 19.5H17.875C18.2202 19.5 18.5 19.2202 18.5 18.875V11.375C18.5 11.0298 18.2202 10.75 17.875 10.75H16V8.25311C16.0089 7.26808 15.6267 6.31968 14.9372 5.61607C14.2469 4.91168 13.3051 4.51026 12.3189 4.50015ZM15.361 12C15.3657 12.0001 15.3703 12.0002 15.375 12.0002C15.3797 12.0002 15.3843 12.0001 15.389 12H17.25V18.25H7.25V12H9.11103C9.11567 12.0001 9.12033 12.0002 9.125 12.0002C9.12967 12.0002 9.13433 12.0001 9.13897 12H15.361ZM14.75 10.75V8.24393C14.7565 7.58918 14.5027 6.95864 14.0444 6.49098C13.5868 6.02404 12.9628 5.75765 12.3091 5.75015H12.2438C11.589 5.74364 10.9585 5.99741 10.4908 6.45572C10.0239 6.91332 9.7575 7.53738 9.75 8.19104V10.75H14.75ZM12.25 14.5C11.9048 14.5 11.625 14.7798 11.625 15.125C11.625 15.4702 11.9048 15.75 12.25 15.75C12.5952 15.75 12.875 15.4702 12.875 15.125C12.875 14.7798 12.5952 14.5 12.25 14.5ZM10.375 15.125C10.375 14.0895 11.2145 13.25 12.25 13.25C13.2855 13.25 14.125 14.0895 14.125 15.125C14.125 16.1605 13.2855 17 12.25 17C11.2145 17 10.375 16.1605 10.375 15.125Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
