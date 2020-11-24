import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const DoorIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.60938 7.04348C8.60938 6.46718 9.07656 6 9.65285 6H26.3485C26.9248 6 27.392 6.46718 27.392 7.04348V22.6957C27.392 23.2719 26.9248 23.7391 26.3485 23.7391H22.1746V28.9565C22.1746 29.3248 21.9805 29.6658 21.6638 29.8538C21.3471 30.0418 20.9548 30.0489 20.6314 29.8726L9.15318 23.6117C8.81795 23.4289 8.60938 23.0775 8.60938 22.6957V7.04348ZM22.1746 21.6522H25.305V8.08696H13.745L21.6308 12.3883C21.966 12.5711 22.1746 12.9225 22.1746 13.3043V21.6522ZM10.6963 8.80126V22.0762L20.0876 27.1987V13.9238L10.6963 8.80126Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
