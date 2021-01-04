import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import * as React from 'react';

export const EmailFolderIcon = (props: DefaultSvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M14 5.33325V13.9999H2V5.33325"
        stroke="#828DB8"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.3334 2H0.666748V5.33333H15.3334V2Z"
        stroke="#828DB8"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M6.66675 8H9.33341" stroke="#828DB8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </SvgIcon>
  );
};
