import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const SimpleLocationIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon
      {...props}
      width={theme.spacing(3.5)}
      height={theme.spacing(3.5)}
      viewBox={`0 0 ${theme.spacing(3.5)} ${theme.spacing(3.5)}`}
    >
      <path
        d="M22.8629 12.3065C22.8629 17.1705 14.0565 26.25 14.0565 26.25C14.0565 26.25 5.25 17.1705 5.25 12.3065C5.25 9.97084 6.17782 7.73088 7.82935 6.07935C9.48088 4.42782 11.7208 3.5 14.0565 3.5C16.3921 3.5 18.632 4.42782 20.2836 6.07935C21.9351 7.73088 22.8629 9.97084 22.8629 12.3065Z"
        stroke={props.color ? props.color : theme.palette.gray.main}
        fill="none"
        stroke-width="1.33333"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.0561 15.2421C15.6773 15.2421 16.9916 13.9278 16.9916 12.3066C16.9916 10.6854 15.6773 9.37109 14.0561 9.37109C12.4349 9.37109 11.1206 10.6854 11.1206 12.3066C11.1206 13.9278 12.4349 15.2421 14.0561 15.2421Z"
        stroke={props.color ? props.color : theme.palette.gray.main}
        fill="none"
        stroke-width="1.33333"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  );
};
