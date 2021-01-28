import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const StarIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3.61986L14.6416 8.97155C14.7145 9.11911 14.8553 9.22138 15.0181 9.24504L20.9255 10.1034L16.651 14.2702C16.5332 14.3851 16.4794 14.5505 16.5072 14.7127L17.516 20.5964L12.2326 17.8196C12.087 17.7431 11.913 17.7431 11.7674 17.8196L6.48398 20.5964L7.49281 14.7127C7.52062 14.5505 7.46685 14.3851 7.34901 14.2702L3.07446 10.1034L8.98189 9.24504C9.14474 9.22138 9.28552 9.11911 9.35835 8.97155L12 3.61986Z"
        stroke={props.color ? props.color : theme.palette.yellow.main}
        fill="none"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};
