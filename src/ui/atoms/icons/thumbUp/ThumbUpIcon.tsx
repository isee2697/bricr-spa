import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const ThumbUpIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12.516 2.25L12.2812 2.46075L7.1955 7.5H3.75V19.5H16.383C17.4405 19.5 18.363 18.753 18.5858 17.7188L20.2035 10.2188C20.4982 8.83275 19.4152 7.5 18 7.5H13.6875L13.8285 6.9375C13.9808 6.8205 14.0775 6.77025 14.2972 6.46875C14.6482 5.98875 15 5.244 15 4.242C15 3.1725 14.0325 2.25 12.8205 2.25H12.516ZM13.0545 3.8205C13.371 3.882 13.5 4.011 13.5 4.242C13.5 4.91925 13.2952 5.33775 13.1017 5.60175C12.9082 5.865 12.7733 5.9295 12.7733 5.9295L12.516 6.0705L12.4222 6.375L11.9767 8.0625L11.742 9H18C18.495 9 18.8287 9.4305 18.7267 9.91425L17.133 17.4142C17.0565 17.7653 16.74 18 16.383 18H8.25V8.5545L13.0545 3.8205ZM5.25 9H6.75V18H5.25V9Z"
        fill={props.color ? props.color : theme.palette.green.main}
      />
    </SvgIcon>
  );
};
