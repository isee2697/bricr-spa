import SvgIcon, { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core';
import * as React from 'react';

export const PriorityLowIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={props.color ? props.color : theme.palette.green.main}
        d="M7.67054 5.47003C7.85278 5.28778 8.14826 5.28778 8.3305 5.47003L12.9972 10.1367C13.1794 10.3189 13.1794 10.6144 12.9972 10.7967C12.8149 10.9789 12.5194 10.9789 12.3372 10.7967L8.00052 6.45998L3.66384 10.7967C3.48159 10.9789 3.18612 10.9789 3.00387 10.7967C2.82163 10.6144 2.82163 10.3189 3.00387 10.1367L7.67054 5.47003Z"
      />
    </SvgIcon>
  );
};
