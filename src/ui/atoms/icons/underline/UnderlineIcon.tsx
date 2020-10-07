import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

import * as React from 'react';

export const UnderlineIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        d="M9.39046 6.99998V13.7384C9.39046 14.6857 9.61965 15.3886 10.078 15.847C10.5466 16.3053 11.1935 16.5345 12.0186 16.5345C12.8335 16.5345 13.4701 16.3053 13.9285 15.847C14.3971 15.3886 14.6314 14.6857 14.6314 13.7384V6.99998H16.0219V13.7231C16.0219 14.6093 15.8436 15.358 15.4871 15.9692C15.1305 16.5702 14.6467 17.0184 14.0355 17.3138C13.4345 17.6092 12.7571 17.7569 12.0033 17.7569C11.2495 17.7569 10.567 17.6092 9.95581 17.3138C9.3548 17.0184 8.87604 16.5702 8.51951 15.9692C8.17317 15.358 8 14.6093 8 13.7231V6.99998H9.39046Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
      <rect x="8" y="19" width="8" height="1" fill={props.color ? props.color : theme.palette.gray.main} />
    </SvgIcon>
  );
};
