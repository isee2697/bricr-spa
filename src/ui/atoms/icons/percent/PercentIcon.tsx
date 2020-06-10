import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const PercentIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        d="M2.96495 13.16C2.96495 14.476 3.84695 15.26 5.00895 15.26C6.18495 15.26 7.05295 14.476 7.05295 13.16C7.05295 11.858 6.18495 11.074 5.00895 11.074C3.84695 11.074 2.96495 11.858 2.96495 13.16ZM5.00895 11.858C5.62495 11.858 6.04495 12.278 6.04495 13.16C6.04495 14.028 5.62495 14.476 5.00895 14.476C4.39295 14.476 3.98695 14.028 3.98695 13.16C3.98695 12.278 4.39295 11.858 5.00895 11.858ZM4.21095 21H5.47095L11.141 11.228H9.88095L4.21095 21ZM8.32695 19.068C8.32695 20.37 9.19495 21.168 10.371 21.168C11.533 21.168 12.401 20.37 12.401 19.068C12.401 17.752 11.533 16.968 10.371 16.968C9.19495 16.968 8.32695 17.752 8.32695 19.068ZM10.357 17.766C10.973 17.766 11.393 18.186 11.393 19.068C11.393 19.936 10.973 20.356 10.357 20.356C9.74095 20.356 9.32095 19.936 9.32095 19.068C9.32095 18.186 9.74095 17.766 10.357 17.766Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
