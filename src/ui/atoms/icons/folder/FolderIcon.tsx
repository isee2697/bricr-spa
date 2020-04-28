import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const FolderIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.66667 5C4.29848 5 4 5.28491 4 5.63636V10.0908V17.0909C4 17.5972 4.21071 18.0828 4.58579 18.4408C4.96086 18.7989 5.46957 19 6 19H18C18.5304 19 19.0391 18.7989 19.4142 18.4408C19.7893 18.0828 20 17.5972 20 17.0909V10.0908V7.54545C20 7.194 19.7015 6.90909 19.3333 6.90909H11.6901L10.5547 5.28337C10.4311 5.10634 10.2229 5 10 5H4.66667ZM18.6667 9.45439V8.18182H11.3333C11.1104 8.18182 10.9023 8.07548 10.7786 7.89845L9.64321 6.27273H5.33333V9.45439H18.6667ZM5.33333 10.7271H18.6667V17.0909C18.6667 17.2597 18.5964 17.4215 18.4714 17.5409C18.3464 17.6602 18.1768 17.7273 18 17.7273H6C5.82319 17.7273 5.65362 17.6602 5.5286 17.5409C5.40357 17.4215 5.33333 17.2597 5.33333 17.0909V10.7271Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
