import * as React from 'react';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';

import { BaseIcon } from '../baseIcon/BaseIcon';

export const UploadIcon = (props: DefaultSvgIconProps) => (
  <BaseIcon
    {...props}
    d="M4.66667 4C4.29848 4 4 4.29848 4 4.66667V16.6667C4 17.1971 4.21071 17.7058 4.58579 18.0809C4.96086 18.456 5.46957 18.6667 6 18.6667H9.33333C9.70152 18.6667 10 18.3682 10 18C10 17.6318 9.70152 17.3333 9.33333 17.3333H6C5.82319 17.3333 5.65362 17.2631 5.5286 17.1381C5.40357 17.013 5.33333 16.8435 5.33333 16.6667V5.33333H9.66667L11.4667 7.73333C11.5926 7.9012 11.7902 8 12 8H18.6667V16.6667C18.6667 16.8435 18.5964 17.013 18.4714 17.1381C18.3464 17.2631 18.1768 17.3333 18 17.3333H14.6667C14.2985 17.3333 14 17.6318 14 18C14 18.3682 14.2985 18.6667 14.6667 18.6667H18C18.5304 18.6667 19.0391 18.456 19.4142 18.0809C19.7893 17.7058 20 17.1971 20 16.6667V7.33333C20 6.96514 19.7015 6.66667 19.3333 6.66667H12.3333L10.5333 4.26667C10.4074 4.0988 10.2098 4 10 4H4.66667ZM12.0007 10.6665C11.8076 10.6665 11.6337 10.7485 11.512 10.8797L8.86323 13.5284C8.60288 13.7888 8.60288 14.2109 8.86323 14.4712C9.12358 14.7316 9.54569 14.7316 9.80604 14.4712L11.334 12.9433V17.9998C11.334 18.368 11.6325 18.6665 12.0007 18.6665C12.3688 18.6665 12.6673 18.368 12.6673 17.9998V12.942L14.1966 14.4712C14.4569 14.7316 14.879 14.7316 15.1394 14.4712C15.3997 14.2109 15.3997 13.7888 15.1394 13.5284L12.4727 10.8618C12.3425 10.7315 12.1717 10.6664 12.001 10.6665H12.0007Z"
  />
);
