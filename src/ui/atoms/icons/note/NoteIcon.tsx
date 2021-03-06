import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const NoteIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.66667 5.5C4.29848 5.5 4 5.79101 4 6.15V17.85C4 18.209 4.29848 18.5 4.66667 18.5H19.3333C19.7015 18.5 20 18.209 20 17.85V6.15C20 5.79101 19.7015 5.5 19.3333 5.5H4.66667ZM5.33333 17.2V6.8H18.6667V17.2H5.33333ZM8.00065 8.75C7.63246 8.75 7.33398 9.04101 7.33398 9.4C7.33398 9.75899 7.63246 10.05 8.00065 10.05H16.0007C16.3688 10.05 16.6673 9.75899 16.6673 9.4C16.6673 9.04101 16.3688 8.75 16.0007 8.75H8.00065ZM7.33398 12.0025C7.33398 11.6436 7.63246 11.3525 8.00065 11.3525H16.0007C16.3688 11.3525 16.6673 11.6436 16.6673 12.0025C16.6673 12.3615 16.3688 12.6525 16.0007 12.6525H8.00065C7.63246 12.6525 7.33398 12.3615 7.33398 12.0025ZM8.00065 13.9487C7.63246 13.9487 7.33398 14.2397 7.33398 14.5987C7.33398 14.9577 7.63246 15.2487 8.00065 15.2487H11.334C11.7022 15.2487 12.0007 14.9577 12.0007 14.5987C12.0007 14.2397 11.7022 13.9487 11.334 13.9487H8.00065Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
