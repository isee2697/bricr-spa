import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const FullscreenOnIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.33268 4.66602C4.96449 4.66602 4.66602 4.96449 4.66602 5.33268V9.33268C4.66602 9.70087 4.96449 9.99935 5.33268 9.99935C5.70087 9.99935 5.99935 9.70087 5.99935 9.33268V5.99935H9.33268C9.70087 5.99935 9.99935 5.70087 9.99935 5.33268C9.99935 4.96449 9.70087 4.66602 9.33268 4.66602H5.33268ZM14.666 4.66602C14.2978 4.66602 13.9994 4.96449 13.9994 5.33268C13.9994 5.70087 14.2978 5.99935 14.666 5.99935H17.9994V9.33268C17.9994 9.70087 18.2978 9.99935 18.666 9.99935C19.0342 9.99935 19.3327 9.70087 19.3327 9.33268V5.33268C19.3327 4.96449 19.0342 4.66602 18.666 4.66602H14.666ZM18.666 13.9995C19.0342 13.9995 19.3327 14.298 19.3327 14.6662V18.6662C19.3327 19.0344 19.0342 19.3328 18.666 19.3328H14.666C14.2978 19.3328 13.9994 19.0344 13.9994 18.6662C13.9994 18.298 14.2978 17.9995 14.666 17.9995H17.9994V14.6662C17.9994 14.298 18.2978 13.9995 18.666 13.9995ZM5.99936 14.6662C5.99936 14.298 5.70088 13.9995 5.33269 13.9995C4.9645 13.9995 4.66602 14.298 4.66602 14.6662V18.6662C4.66602 19.0344 4.9645 19.3328 5.33269 19.3328H9.33269C9.70088 19.3328 9.99936 19.0344 9.99936 18.6662C9.99936 18.298 9.70088 17.9995 9.33269 17.9995H5.99936V14.6662Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};