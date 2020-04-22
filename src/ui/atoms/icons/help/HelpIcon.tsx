import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';

import { IconProps } from '../Icon.types';
import { palette } from 'theme/palette';

export const HelpIcon = (props: IconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5.33333C8.3181 5.33333 5.33333 8.3181 5.33333 12C5.33333 15.6819 8.3181 18.6667 12 18.6667C15.6819 18.6667 18.6667 15.6819 18.6667 12C18.6667 8.3181 15.6819 5.33333 12 5.33333ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 10.6667C12.3682 10.6667 12.6667 10.9651 12.6667 11.3333V15.3333C12.6667 15.7015 12.3682 16 12 16C11.6318 16 11.3333 15.7015 11.3333 15.3333V11.3333C11.3333 10.9651 11.6318 10.6667 12 10.6667ZM12.6667 8.66667C12.6667 9.03486 12.3682 9.33333 12 9.33333C11.6318 9.33333 11.3333 9.03486 11.3333 8.66667C11.3333 8.29848 11.6318 8 12 8C12.3682 8 12.6667 8.29848 12.6667 8.66667Z"
        fill={props.color ? props.color : palette.gray.main}
      />
    </SvgIcon>
  );
};
