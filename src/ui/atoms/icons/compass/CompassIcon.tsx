import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const CompassIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon
      {...props}
      width={theme.spacing(4.5)}
      height={theme.spacing(4.5)}
      viewBox={`0 0 ${theme.spacing(4.5)} ${theme.spacing(4.5)}`}
    >
      <path
        d="M21 16L18 7L15 16L6 19L15 22L18 31L21 22L30 19L21 16ZM10 19L16 17L17 19H10ZM18 27L16 21L18 20V27ZM18 11L20 17L18 18V11ZM20 21L19 19H26L20 21ZM14.7 24.3L11 26L12.7 22.3L14.3 22.8L14.7 24.3ZM23.3 22.3L25 26L21.3 24.3L21.8 22.7L23.3 22.3ZM12.7 15.7L11 12L14.7 13.7L14.2 15.2L12.7 15.7ZM21.3 13.7L25 12L23.3 15.7L21.7 15.2L21.3 13.7Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
