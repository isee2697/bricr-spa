import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';

import { palette } from 'theme/palette';

export const GraphArrowIcon = (props: DefaultSvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.1818 7C13.7802 7 13.4545 7.33579 13.4545 7.75C13.4545 8.16421 13.7802 8.5 14.1818 8.5H17.6397L12.6995 14.1607L8.8779 10.2197C8.59388 9.92678 8.13339 9.92678 7.84938 10.2197L4.21301 13.9697C3.929 14.2626 3.929 14.7374 4.21301 15.0303C4.49703 15.3232 4.95751 15.3232 5.24153 15.0303L8.36364 11.8107L12.213 15.7803C12.3541 15.9258 12.5469 16.0051 12.7464 15.9997C12.9458 15.9943 13.1344 15.9047 13.2678 15.7517L18.5455 9.70447V13C18.5455 13.4142 18.8711 13.75 19.2727 13.75C19.6744 13.75 20 13.4142 20 13V7.75344C20 7.7478 20 7.74216 19.9999 7.73652C19.9963 7.52881 19.9109 7.3417 19.7755 7.20805C19.7095 7.14297 19.6317 7.09057 19.5457 7.05464C19.4614 7.0194 19.3693 7 19.2727 7H14.1818Z"
        fill={props.color ? props.color : palette.gray.main}
      />
    </SvgIcon>
  );
};
