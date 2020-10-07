import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

import * as React from 'react';

export const BackIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0161 6.98235C10.6386 6.60484 10.0265 6.60484 9.64902 6.98235L4.98235 11.649C4.60484 12.0265 4.60484 12.6386 4.98235 13.0161L9.64902 17.6828C10.0265 18.0603 10.6386 18.0603 11.0161 17.6828C11.3936 17.3052 11.3936 16.6932 11.0161 16.3157L7.99946 13.2991H18.9999C19.5338 13.2991 19.9666 12.8663 19.9666 12.3324C19.9666 11.7985 19.5338 11.3657 18.9999 11.3657H7.99979L11.0161 8.34942C11.3936 7.97192 11.3936 7.35986 11.0161 6.98235Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
