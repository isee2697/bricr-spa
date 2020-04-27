import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core';

export const PinIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6956 4.21301C14.4116 3.929 13.9511 3.929 13.6671 4.21301C13.3831 4.49703 13.3831 4.95751 13.6671 5.24153L14.3278 5.90221L6.31306 10.3754L5.24153 9.30383C4.95751 9.01982 4.49703 9.01982 4.21301 9.30383C3.929 9.58785 3.929 10.0483 4.21301 10.3324L5.65786 11.7772C5.66799 11.788 5.6784 11.7984 5.68909 11.8084L8.42616 14.5455L4.21301 18.7586C3.929 19.0427 3.929 19.5031 4.21301 19.7872C4.49703 20.0712 4.95751 20.0712 5.24153 19.7872L9.45467 15.574L12.2008 18.3201C12.2048 18.3243 12.2089 18.3284 12.2131 18.3324L13.6675 19.7869C13.9516 20.0709 14.412 20.0709 14.6961 19.7869C14.9801 19.5029 14.9801 19.0424 14.6961 18.7584L13.6244 17.6867L18.0976 9.67201L18.758 10.3324C19.042 10.6165 19.5025 10.6165 19.7865 10.3324C20.0706 10.0484 20.0706 9.58793 19.7865 9.30392L18.4681 7.98546C18.454 7.97011 18.4392 7.95529 18.4237 7.94107L16.0534 5.5708C16.0425 5.55908 16.0311 5.54778 16.0195 5.5369L14.6956 4.21301ZM12.5554 16.6177L17.0285 8.60293L15.3969 6.97128L7.38214 11.4444L12.5554 16.6177Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
