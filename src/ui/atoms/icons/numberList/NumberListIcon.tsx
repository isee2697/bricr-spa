import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const NumberListIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <rect x="5" y="4.99998" width="2" height="1" fill={props.color ? props.color : theme.palette.gray.main} />
      <rect x="6" y="4.99998" width="1" height="4" fill={props.color ? props.color : theme.palette.gray.main} />
      <rect x="5" y="9.99998" width="2" height="1" fill={props.color ? props.color : theme.palette.gray.main} />
      <path d="M6 11H7L6 13H5L6 11Z" fill={props.color ? props.color : theme.palette.gray.main} />
      <rect x="5" y="13" width="2" height="1" fill={props.color ? props.color : theme.palette.gray.main} />
      <rect x="5" y="15" width="2" height="1" fill={props.color ? props.color : theme.palette.gray.main} />
      <path d="M6 16H7L6 17H5L6 16Z" fill={props.color ? props.color : theme.palette.gray.main} />
      <path d="M6 18H7L6 17H5L6 18Z" fill={props.color ? props.color : theme.palette.gray.main} />
      <rect x="5" y="18" width="2" height="1" fill={props.color ? props.color : theme.palette.gray.main} />
      <rect x="10" y="11" width="9" height="2" fill={props.color ? props.color : theme.palette.gray.main} />
      <rect x="10" y="5.99998" width="9" height="2" fill={props.color ? props.color : theme.palette.gray.main} />
      <rect x="10" y="16" width="9" height="2" fill={props.color ? props.color : theme.palette.gray.main} />
    </SvgIcon>
  );
};
