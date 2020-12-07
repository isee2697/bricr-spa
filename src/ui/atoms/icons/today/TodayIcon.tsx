import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const TodayIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <g clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.66668 4.66667C8.66668 4.29848 8.3682 4 8.00001 4C7.63182 4 7.33334 4.29848 7.33334 4.66667V5H6C4.89543 5 4 5.95939 4 7.14286V8.66667V17.8571C4 19.0406 4.89543 20 6 20H18C19.1046 20 20 19.0406 20 17.8571V8.66667V7.14286C20 5.95939 19.1046 5 18 5H16.6667V4.66667C16.6667 4.29848 16.3682 4 16 4C15.6318 4 15.3333 4.29848 15.3333 4.66667V5H8.66668V4.66667ZM18.6667 8V7.14286C18.6667 6.74837 18.3682 6.42857 18 6.42857H16.6667V6.66667C16.6667 7.03486 16.3682 7.33333 16 7.33333C15.6318 7.33333 15.3333 7.03486 15.3333 6.66667V6.42857H8.66668V6.66667C8.66668 7.03486 8.3682 7.33333 8.00001 7.33333C7.63182 7.33333 7.33334 7.03486 7.33334 6.66667V6.42857H6C5.63181 6.42857 5.33333 6.74837 5.33333 7.14286V8H18.6667ZM5.33333 9.33333H18.6667V17.8571C18.6667 18.2516 18.3682 18.5714 18 18.5714H6C5.63181 18.5714 5.33333 18.2516 5.33333 17.8571V9.33333Z"
          fill={props.color ? props.color : theme.palette.primary.main}
        />
        <circle cx="8" cy="12" r="2" fill={props.color ? props.color : theme.palette.primary.main} />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="16" height="16" fill="white" transform="translate(4 4)" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
