import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const QuoteIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <rect x="6" y="7.99998" width="4" height="4" fill={props.color ? props.color : theme.palette.gray.main} />
      <path d="M8 12H10L9 16H7L8 12Z" fill={props.color ? props.color : theme.palette.gray.main} />
      <path d="M15 12H17L16 16H14L15 12Z" fill={props.color ? props.color : theme.palette.gray.main} />
      <rect x="13" y="7.99998" width="4" height="4" fill={props.color ? props.color : theme.palette.gray.main} />
    </SvgIcon>
  );
};
