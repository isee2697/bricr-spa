import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';

import { palette } from 'theme/palette';

export const CalendarIcon = (props: DefaultSvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.33333 4.66667C9.33333 4.29848 9.03486 4 8.66667 4C8.29848 4 8 4.29848 8 4.66667V6H4.66667C4.29848 6 4 6.29848 4 6.66667V9.33333V18.6667C4 19.0349 4.29848 19.3333 4.66667 19.3333H10C10.3682 19.3333 10.6667 19.0349 10.6667 18.6667C10.6667 18.2985 10.3682 18 10 18H5.33333V10H18.6667V11.3333C18.6667 11.7015 18.9651 12 19.3333 12C19.7015 12 20 11.7015 20 11.3333V9.33333V6.66667C20 6.29848 19.7015 6 19.3333 6H16V4.66667C16 4.29848 15.7015 4 15.3333 4C14.9651 4 14.6667 4.29848 14.6667 4.66667V6H9.33333V4.66667ZM18.6667 8.66667V7.33333L15.3333 7.33333H8.66667L5.33333 7.33333V8.66667H18.6667ZM12.6667 16C12.6667 14.5272 13.8606 13.3333 15.3333 13.3333C16.8061 13.3333 18 14.5272 18 16C18 17.4728 16.8061 18.6667 15.3333 18.6667C13.8606 18.6667 12.6667 17.4728 12.6667 16ZM15.3333 12C13.1242 12 11.3333 13.7909 11.3333 16C11.3333 18.2091 13.1242 20 15.3333 20C17.5425 20 19.3333 18.2091 19.3333 16C19.3333 13.7909 17.5425 12 15.3333 12ZM16 14.6667C16 14.2985 15.7015 14 15.3333 14C14.9651 14 14.6667 14.2985 14.6667 14.6667V16C14.6667 16.3682 14.9651 16.6667 15.3333 16.6667H16.6667C17.0349 16.6667 17.3333 16.3682 17.3333 16C17.3333 15.6318 17.0349 15.3333 16.6667 15.3333H16V14.6667Z"
        fill={props.color ? props.color : palette.gray.main}
      />
    </SvgIcon>
  );
};
