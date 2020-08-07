import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const RedoIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      <path
        d="M1.40039 9.39935C3.14972 7.65002 5.52506 6.66602 7.99972 6.66602C10.4744 6.66602 12.8497 7.65002 14.5991 9.40002"
        stroke={props.color ? props.color : theme.palette.gray.main}
        strokeWidth="1.33333"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.96094 10.2318L14.6009 9.39977L13.7696 4.75977"
        stroke={props.color ? props.color : theme.palette.gray.main}
        strokeWidth="1.33333"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};
