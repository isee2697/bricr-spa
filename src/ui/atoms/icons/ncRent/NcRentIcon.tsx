import * as React from 'react';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';

import { BaseIcon } from '../baseIcon/BaseIcon';

export const NcRentIcon = (props: DefaultSvgIconProps) => (
  <BaseIcon
    {...props}
    d="M12.5848 4.725C12.5848 4.32459 12.2602 4 11.8598 4C11.4594 4 11.1348 4.32459 11.1348 4.725V6.08828V8.09082H7.08864C6.89635 8.09082 6.71195 8.1672 6.57598 8.30317L5.21235 9.6668C4.92922 9.94993 4.92922 10.409 5.21235 10.6921L6.57598 12.0557C6.71195 12.1917 6.89635 12.2681 7.08864 12.2681H11.1348V14.2697V19H9.8168C9.41639 19 9.0918 19.3246 9.0918 19.725C9.0918 20.1254 9.41639 20.45 9.8168 20.45H11.8598H13.9077C14.3081 20.45 14.6327 20.1254 14.6327 19.725C14.6327 19.3246 14.3081 19 13.9077 19H12.5848V14.9947H16.6325C16.8248 14.9947 17.0092 14.9183 17.1451 14.7823L18.5088 13.4187C18.7919 13.1355 18.7919 12.6765 18.5088 12.3934L17.1451 11.0297C17.0092 10.8938 16.8248 10.8174 16.6325 10.8174H12.5848V9.54055H16.6325C16.8248 9.54055 17.0092 9.46417 17.1451 9.32821L18.5088 7.96457C18.7919 7.68144 18.7919 7.2224 18.5088 6.93927L17.1451 5.57563C17.0092 5.43966 16.8248 5.36328 16.6325 5.36328H12.5848V4.725ZM12.5848 6.81328V8.09055H16.3322L16.9708 7.45192L16.3322 6.81328H12.5848ZM11.1348 9.54082H7.38894L6.7503 10.1795L7.38894 10.8181H11.1348V9.54082ZM12.5848 12.2674V13.5447H16.3322L16.9708 12.906L16.3322 12.2674H12.5848Z"
  />
);
