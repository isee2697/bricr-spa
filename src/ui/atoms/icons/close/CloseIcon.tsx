import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const CloseIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5657 5.5649C19.8781 5.25248 19.8781 4.74595 19.5657 4.43353C19.2533 4.12111 18.7467 4.12111 18.4343 4.43353L12 10.8678L5.5657 4.43353C5.25328 4.12111 4.74675 4.12111 4.43433 4.43353C4.12191 4.74595 4.12191 5.25248 4.43433 5.5649L10.8686 11.9992L4.43433 18.4335C4.12191 18.746 4.12191 19.2525 4.43433 19.5649C4.74675 19.8773 5.25328 19.8773 5.5657 19.5649L12 13.1306L18.4343 19.5649C18.7467 19.8773 19.2533 19.8773 19.5657 19.5649C19.8781 19.2525 19.8781 18.746 19.5657 18.4335L13.1314 11.9992L19.5657 5.5649Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
