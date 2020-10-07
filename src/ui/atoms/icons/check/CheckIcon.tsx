import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const CheckIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.7192 7.14749C18.0362 7.38483 18.0934 7.82463 17.8468 8.12979L10.665 16.7298C10.5369 16.8882 10.3443 16.9862 10.1361 16.9986C9.92789 17.0111 9.72415 16.9369 9.57664 16.795L5.21301 12.595C4.929 12.3216 4.929 11.8784 5.21301 11.605C5.49703 11.3317 5.95751 11.3317 6.24153 11.605L10.0226 15.2443L16.6986 7.27027C16.9452 6.96511 17.4021 6.91014 17.7192 7.14749Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
