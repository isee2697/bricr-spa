import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';

import { IconProps } from '../Icon.types';
import { palette } from 'theme/palette';

export const ArrowRightIcon = (props: IconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.53 7.95625C8.86395 7.53997 8 8.01881 8 8.80425L8 15.1958C8 15.9812 8.86395 16.46 9.53 16.0438L14.6432 12.848C15.2699 12.4563 15.2699 11.5437 14.6432 11.152L9.53 7.95625Z"
        fill={props.color ? props.color : palette.gray.main}
      />
    </SvgIcon>
  );
};
