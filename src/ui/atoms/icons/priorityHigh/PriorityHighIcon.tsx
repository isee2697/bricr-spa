import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const PriorityHighIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon width="16" height="16" viewBox="0 0 16 16" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.67054 1.66989C7.85278 1.48764 8.14826 1.48764 8.3305 1.66989L12.9972 6.33655C13.1794 6.5188 13.1794 6.81428 12.9972 6.99652C12.8149 7.17876 12.5194 7.17876 12.3372 6.99652L8.00052 2.65984L3.66384 6.99652C3.48159 7.17876 3.18612 7.17876 3.00387 6.99652C2.82163 6.81428 2.82163 6.5188 3.00387 6.33655L7.67054 1.66989Z"
        fill={props.color ? props.color : theme.palette.red.main}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.67054 5.00321C7.85278 4.82097 8.14826 4.82097 8.3305 5.00321L12.9972 9.66988C13.1794 9.85213 13.1794 10.1476 12.9972 10.3298C12.8149 10.5121 12.5194 10.5121 12.3372 10.3298L8.00052 5.99316L3.66384 10.3298C3.48159 10.5121 3.18612 10.5121 3.00387 10.3298C2.82163 10.1476 2.82163 9.85213 3.00387 9.66988L7.67054 5.00321Z"
        fill={props.color ? props.color : theme.palette.red.main}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.67054 8.33656C7.85278 8.15431 8.14826 8.15431 8.3305 8.33656L12.9972 13.0032C13.1794 13.1855 13.1794 13.4809 12.9972 13.6632C12.8149 13.8454 12.5194 13.8454 12.3372 13.6632L8.00052 9.32651L3.66384 13.6632C3.48159 13.8454 3.18612 13.8454 3.00387 13.6632C2.82163 13.4809 2.82163 13.1855 3.00387 13.0032L7.67054 8.33656Z"
        fill={props.color ? props.color : theme.palette.red.main}
      />
    </SvgIcon>
  );
};
