import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core';

export const FilesIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.90909 4.66667C6.90909 4.29848 7.194 4 7.54545 4H18.3636C18.7151 4 19 4.29848 19 4.66667V18C19 18.3682 18.7151 18.6667 18.3636 18.6667C18.0122 18.6667 17.7273 18.3682 17.7273 18V5.33333H7.54545C7.194 5.33333 6.90909 5.03486 6.90909 4.66667ZM5 7.33333C5 6.96514 5.28491 6.66667 5.63636 6.66667H15.8182C16.1696 6.66667 16.4545 6.96514 16.4545 7.33333V19.3333C16.4545 19.7015 16.1696 20 15.8182 20H5.63636C5.28491 20 5 19.7015 5 19.3333V7.33333ZM6.27273 8V18.6667H15.1818V8H6.27273ZM8.1812 10C7.82974 10 7.54483 10.2985 7.54483 10.6667C7.54483 11.0349 7.82974 11.3333 8.1812 11.3333H13.2721C13.6236 11.3333 13.9085 11.0349 13.9085 10.6667C13.9085 10.2985 13.6236 10 13.2721 10H8.1812ZM7.54483 13.3332C7.54483 12.965 7.82974 12.6665 8.1812 12.6665H13.2721C13.6236 12.6665 13.9085 12.965 13.9085 13.3332C13.9085 13.7014 13.6236 13.9998 13.2721 13.9998H8.1812C7.82974 13.9998 7.54483 13.7014 7.54483 13.3332ZM8.1812 15.3335C7.82974 15.3335 7.54483 15.632 7.54483 16.0002C7.54483 16.3684 7.82974 16.6668 8.1812 16.6668H10.7267C11.0781 16.6668 11.363 16.3684 11.363 16.0002C11.363 15.632 11.0781 15.3335 10.7267 15.3335H8.1812Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
