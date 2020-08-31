import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const FollowUpRectangleIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="3.5"
        fill={props.fill ? props.fill : theme.palette.red.light}
        stroke={props.stroke ? props.stroke : theme.palette.red.main}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.7061 4.69213C8.83066 4.64054 8.97403 4.66906 9.06936 4.76439L11.736 7.43106C11.7985 7.49357 11.8337 7.57835 11.8337 7.66676C11.8337 7.75516 11.7985 7.83995 11.736 7.90246L9.06936 10.5691C8.97403 10.6645 8.83066 10.693 8.7061 10.6414C8.58154 10.5898 8.50033 10.4682 8.50033 10.3334V9.00315C7.44917 9.02323 6.74329 9.14309 6.20837 9.39362C5.63342 9.6629 5.21877 10.1012 4.7878 10.8355C4.71165 10.9652 4.55806 11.0279 4.4129 10.9884C4.26774 10.949 4.16699 10.8172 4.16699 10.6668C4.16699 8.93626 4.82768 7.82867 5.77656 7.16818C6.60054 6.59462 7.60783 6.38164 8.50033 6.34097V5.00009C8.50033 4.86527 8.58154 4.74372 8.7061 4.69213ZM9.16699 5.80483V6.66676C9.16699 6.85085 9.01775 7.00009 8.83366 7.00009C7.93445 7.00009 6.92897 7.17828 6.15743 7.71534C5.62786 8.08396 5.18701 8.63628 4.97301 9.4684C5.24834 9.18755 5.55745 8.96232 5.92561 8.78989C6.65269 8.44936 7.57206 8.33342 8.83366 8.33342C9.01775 8.33342 9.16699 8.48266 9.16699 8.66676V9.52869L11.0289 7.66676L9.16699 5.80483Z"
        stroke={props.stroke ? props.stroke : theme.palette.red.main}
      />
    </SvgIcon>
  );
};
