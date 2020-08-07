import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const FullscreenOffIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 9.33333C10 9.70152 9.70152 10 9.33333 10L5.33333 10C4.96514 10 4.66667 9.70152 4.66667 9.33333C4.66667 8.96514 4.96514 8.66667 5.33333 8.66667L8.66667 8.66667L8.66667 5.33333C8.66667 4.96514 8.96514 4.66667 9.33333 4.66667C9.70152 4.66667 10 4.96514 10 5.33333L10 9.33333Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.332 9.33333C19.332 9.70152 19.0336 10 18.6654 10L14.6654 10C14.2972 10 13.9987 9.70152 13.9987 9.33333L13.9987 5.33333C13.9987 4.96514 14.2972 4.66667 14.6654 4.66667C15.0336 4.66667 15.332 4.96514 15.332 5.33333L15.332 8.66667L18.6654 8.66667C19.0336 8.66667 19.332 8.96514 19.332 9.33333Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6654 19.332C14.2972 19.332 13.9987 19.0336 13.9987 18.6654L13.9987 14.6654C13.9987 14.2972 14.2972 13.9987 14.6654 13.9987L18.6654 13.9987C19.0336 13.9987 19.332 14.2972 19.332 14.6654C19.332 15.0336 19.0336 15.332 18.6654 15.332L15.332 15.332L15.332 18.6654C15.332 19.0336 15.0336 19.332 14.6654 19.332Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.33333 19.332C8.96514 19.332 8.66667 19.0336 8.66667 18.6654L8.66667 15.332L5.33333 15.332C4.96514 15.332 4.66667 15.0336 4.66667 14.6654C4.66667 14.2972 4.96514 13.9987 5.33333 13.9987L9.33333 13.9987C9.70152 13.9987 10 14.2972 10 14.6654L10 18.6654C10 19.0336 9.70152 19.332 9.33333 19.332Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
