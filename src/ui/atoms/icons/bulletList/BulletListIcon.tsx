import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const BulletListIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <rect x="10" y="11" width="9" height="2" fill={props.color ? props.color : theme.palette.gray.main} />
      <rect x="10" y="5.99998" width="9" height="2" fill={props.color ? props.color : theme.palette.gray.main} />
      <rect x="4" y="4.99998" width="4" height="4" rx="2" fill={props.color ? props.color : theme.palette.gray.main} />
      <rect x="4" y="9.99998" width="4" height="4" rx="2" fill={props.color ? props.color : theme.palette.gray.main} />
      <rect x="4" y="15" width="4" height="4" rx="2" fill={props.color ? props.color : theme.palette.gray.main} />
      <rect x="10" y="16" width="9" height="2" fill={props.color ? props.color : theme.palette.gray.main} />
    </SvgIcon>
  );
};
