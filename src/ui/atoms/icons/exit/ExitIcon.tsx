import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import * as React from 'react';

import { BaseIcon } from '../baseIcon/BaseIcon';

export const ExitIcon = (props: DefaultSvgIconProps) => (
  <BaseIcon
    {...props}
    d="M20 11.6667C20 11.8634 19.9148 12.0402 19.7792 12.1623L17.1381 14.8034C16.8777 15.0638 16.4556 15.0638 16.1953 14.8034C15.9349 14.5431 15.9349 14.121 16.1953 13.8606L17.7226 12.3333H10C9.63181 12.3333 9.33333 12.0349 9.33333 11.6667C9.33333 11.2985 9.63181 11 10 11H17.7252L16.1953 9.4701C15.9349 9.20975 15.9349 8.78764 16.1953 8.52729C16.4556 8.26694 16.8777 8.26694 17.1381 8.52729L19.8047 11.194C19.9351 11.3243 20.0002 11.4952 20 11.666V11.6667ZM14.6665 5.66667C14.6665 5.29848 14.368 5 13.9998 5L5.33317 5C4.96498 5 4.6665 5.29848 4.6665 5.66667V17.6667C4.6665 18.0349 4.96498 18.3333 5.33317 18.3333H13.9998C14.368 18.3333 14.6665 18.0349 14.6665 17.6667V15C14.6665 14.6318 14.368 14.3333 13.9998 14.3333C13.6316 14.3333 13.3332 14.6318 13.3332 15V17H5.99984V6.33333L13.3332 6.33333V8.33333C13.3332 8.70152 13.6316 9 13.9998 9C14.368 9 14.6665 8.70152 14.6665 8.33333V5.66667Z"
  />
);
