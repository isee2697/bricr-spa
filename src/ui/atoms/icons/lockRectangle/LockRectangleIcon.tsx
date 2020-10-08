import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const LockRectangleIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <rect
        x="0.5"
        y="0.5"
        width="15"
        height="15"
        rx="3.5"
        fill={props.fill ? props.fill : theme.palette.purple.light}
        stroke={props.stroke ? props.stroke : theme.palette.purple.main}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.15945 4.25008H8.12648C7.63397 4.24561 7.15977 4.4367 6.80796 4.78148C6.45576 5.12663 6.25506 5.59753 6.25 6.09062V7.375H5.3125C5.13991 7.375 5 7.51492 5 7.6875V11.4375C5 11.6101 5.13991 11.75 5.3125 11.75H10.9375C11.1101 11.75 11.25 11.6101 11.25 11.4375V7.6875C11.25 7.51492 11.1101 7.375 10.9375 7.375H10V6.12656C10.0045 5.63404 9.81337 5.15984 9.4686 4.80803C9.12345 4.45584 8.65255 4.25513 8.15945 4.25008ZM9.68072 8C9.68297 8.00005 9.68523 8.00008 9.6875 8.00008C9.68977 8.00008 9.69203 8.00005 9.69428 8H10.625V11.125H5.625V8H6.55572C6.55797 8.00005 6.56023 8.00008 6.5625 8.00008C6.56477 8.00008 6.56703 8.00005 6.56928 8H9.68072ZM9.375 7.375V6.12197C9.37826 5.79459 9.25137 5.47932 9.02222 5.24549C8.79342 5.01202 8.48139 4.87883 8.15456 4.87508H8.12189C7.79451 4.87182 7.47924 4.9987 7.24541 5.22786C7.01194 5.45666 6.87875 5.76869 6.875 6.09552V7.375H9.375ZM8.125 9.25001C7.95241 9.25001 7.8125 9.38992 7.8125 9.56251C7.8125 9.7351 7.95241 9.87501 8.125 9.87501C8.29759 9.87501 8.4375 9.7351 8.4375 9.56251C8.4375 9.38992 8.29759 9.25001 8.125 9.25001ZM7.1875 9.56251C7.1875 9.04475 7.60723 8.62501 8.125 8.62501C8.64277 8.62501 9.0625 9.04475 9.0625 9.56251C9.0625 10.0803 8.64277 10.5 8.125 10.5C7.60723 10.5 7.1875 10.0803 7.1875 9.56251Z"
        stroke={props.stroke ? props.stroke : theme.palette.purple.main}
      />
    </SvgIcon>
  );
};
