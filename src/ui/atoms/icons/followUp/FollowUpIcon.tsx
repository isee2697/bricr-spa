import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const FollowUpIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon
      width={theme.spacing(3)}
      height={theme.spacing(3)}
      viewBox={`0 0 ${theme.spacing(3)} ${theme.spacing(3)}`}
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4115 5.38408C13.6606 5.28089 13.9474 5.33793 14.1381 5.52859L19.4714 10.8619C19.5964 10.987 19.6666 11.1565 19.6666 11.3333C19.6666 11.5101 19.5964 11.6797 19.4714 11.8047L14.1381 17.1381C13.9474 17.3287 13.6606 17.3858 13.4115 17.2826C13.1624 17.1794 13 16.9363 13 16.6667V14.0061C10.8977 14.0463 9.4859 14.286 8.41607 14.7871C7.26617 15.3256 6.43687 16.2023 5.57492 17.6708C5.42263 17.9303 5.11544 18.0556 4.82512 17.9767C4.53481 17.8978 4.33331 17.6342 4.33331 17.3333C4.33331 13.8723 5.65469 11.6572 7.55245 10.3362C9.20041 9.18906 11.215 8.76309 13 8.68175V6C13 5.73036 13.1624 5.48727 13.4115 5.38408ZM14.3333 7.60948V9.33333C14.3333 9.70152 14.0348 10 13.6666 10C11.8682 10 9.85727 10.3564 8.31418 11.4305C7.25505 12.1677 6.37335 13.2724 5.94535 14.9366C6.49601 14.3749 7.11423 13.9245 7.85055 13.5796C9.30471 12.8985 11.1434 12.6667 13.6666 12.6667C14.0348 12.6667 14.3333 12.9651 14.3333 13.3333V15.0572L18.0572 11.3333L14.3333 7.60948Z"
        fill={props.fill ? props.fill : theme.palette.black.main}
      />
    </SvgIcon>
  );
};
