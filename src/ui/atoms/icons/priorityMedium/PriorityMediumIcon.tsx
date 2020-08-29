import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const PriorityMediumIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.67054 3.47003C7.85278 3.28778 8.14826 3.28778 8.3305 3.47003L12.9972 8.13669C13.1794 8.31894 13.1794 8.61442 12.9972 8.79666C12.8149 8.97891 12.5194 8.97891 12.3372 8.79666L8.00052 4.45998L3.66384 8.79666C3.48159 8.97891 3.18612 8.97891 3.00387 8.79666C2.82163 8.61442 2.82163 8.31894 3.00387 8.13669L7.67054 3.47003Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.67054 6.80334C7.85278 6.6211 8.14826 6.6211 8.3305 6.80334L12.9972 11.47C13.1794 11.6523 13.1794 11.9477 12.9972 12.13C12.8149 12.3122 12.5194 12.3122 12.3372 12.13L8.00052 7.79329L3.66384 12.13C3.48159 12.3122 3.18612 12.3122 3.00387 12.13C2.82163 11.9477 2.82163 11.6523 3.00387 11.47L7.67054 6.80334Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
