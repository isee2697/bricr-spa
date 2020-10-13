import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

import * as React from 'react';

export const ShareIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon
      width={theme.spacing(3)}
      height={theme.spacing(3)}
      viewBox={theme.spacing(0, 0, 3, 3)}
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6667 4C11.8634 4 12.0402 4.08522 12.1623 4.22076L14.8034 6.86193C15.0638 7.12228 15.0638 7.54439 14.8034 7.80474C14.5431 8.06509 14.121 8.06509 13.8606 7.80474L12.3333 6.27745V14C12.3333 14.3682 12.0349 14.6667 11.6667 14.6667C11.2985 14.6667 11 14.3682 11 14V6.27484L9.4701 7.80474C9.20975 8.06509 8.78764 8.06509 8.52729 7.80474C8.26694 7.54439 8.26694 7.12228 8.52729 6.86193L11.194 4.19526C11.3243 4.06492 11.4952 3.99984 11.666 4H11.6667ZM5.66667 9.3335C5.29848 9.3335 5 9.63197 5 10.0002V18.6668C5 19.035 5.29848 19.3335 5.66667 19.3335H17.6667C18.0349 19.3335 18.3333 19.035 18.3333 18.6668V10.0002C18.3333 9.63197 18.0349 9.3335 17.6667 9.3335H15C14.6318 9.3335 14.3333 9.63197 14.3333 10.0002C14.3333 10.3684 14.6318 10.6668 15 10.6668H17V18.0002H6.33333V10.6668H8.33333C8.70152 10.6668 9 10.3684 9 10.0002C9 9.63197 8.70152 9.3335 8.33333 9.3335H5.66667Z"
        fill="white"
      />
    </SvgIcon>
  );
};
