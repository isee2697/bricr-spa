import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const UndoIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      <path
        d="M14.5991 9.39935C12.8497 7.65002 10.4744 6.66602 7.99972 6.66602C5.52506 6.66602 3.14972 7.65002 1.40039 9.39935"
        stroke={props.color ? props.color : theme.palette.gray.main}
        strokeWidth="1.33333"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.04039 10.2318L1.40039 9.39977L2.23172 4.75977"
        stroke={props.color ? props.color : theme.palette.gray.main}
        strokeWidth="1.33333"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};
