import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import * as React from 'react';

export const ArrowOriginalIcon = (props: DefaultSvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path d="M8 16L16 8M16 8L11 8M16 8L16 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </SvgIcon>
  );
};
