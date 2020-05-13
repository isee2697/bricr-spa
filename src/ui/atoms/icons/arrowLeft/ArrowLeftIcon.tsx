import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const ArrowLeftIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3598 15.6332C13.0111 16.176 14 15.7128 14 14.865L14 9.13504C14 8.2872 13.0111 7.82405 12.3598 8.36682L8.92187 11.2318C8.44211 11.6316 8.44211 12.3684 8.92187 12.7682L12.3598 15.6332Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
