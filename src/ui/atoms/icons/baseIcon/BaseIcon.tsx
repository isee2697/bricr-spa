import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const BaseIcon = ({ d, ...props }: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d={d} fill={props.color ? props.color : theme.palette.gray.main} />
    </SvgIcon>
  );
};
