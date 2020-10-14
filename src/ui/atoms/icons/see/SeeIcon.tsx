import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const SeeIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.89936 12.3844C5.79559 12.2391 5.70723 12.1094 5.63499 12C5.70723 11.8906 5.79559 11.7609 5.89936 11.6156C6.23369 11.1476 6.72302 10.5251 7.34283 9.90533C8.60149 8.64667 10.2949 7.5 12.25 7.5C14.2051 7.5 15.8985 8.64667 17.1572 9.90533C17.777 10.5251 18.2663 11.1476 18.6006 11.6156C18.7044 11.7609 18.7928 11.8906 18.865 12C18.7928 12.1094 18.7044 12.2391 18.6006 12.3844C18.2663 12.8524 17.777 13.4749 17.1572 14.0947C15.8985 15.3533 14.2051 16.5 12.25 16.5C10.2949 16.5 8.60149 15.3533 7.34283 14.0947C6.72302 13.4749 6.23369 12.8524 5.89936 12.3844ZM19.75 12C20.4012 11.6279 20.4011 11.6277 20.4009 11.6274L19.75 12ZM20.4009 11.6274C20.5327 11.858 20.5329 12.1415 20.4012 12.3721L19.75 12C20.4012 12.3721 20.4007 12.3729 20.4006 12.3732L20.3997 12.3747L20.3971 12.3792L20.3885 12.3939C20.3814 12.4061 20.3713 12.4232 20.3583 12.4448C20.3324 12.4881 20.2949 12.5495 20.2461 12.6266C20.1487 12.7806 20.0061 12.9974 19.8212 13.2562C19.4524 13.7726 18.9105 14.4626 18.2178 15.1553C16.8515 16.5217 14.7949 18 12.25 18C9.70507 18 7.64851 16.5217 6.28217 15.1553C5.58948 14.4626 5.04756 13.7726 4.67876 13.2562C4.4939 12.9974 4.35132 12.7806 4.25389 12.6266C4.20514 12.5495 4.16762 12.4881 4.14167 12.4448C4.12869 12.4232 4.11861 12.4061 4.11145 12.3939L4.10292 12.3792L4.10031 12.3747L4.09882 12.3721L4.75 12C4.09882 11.6279 4.09929 11.6271 4.09943 11.6268L4.10031 11.6253L4.10292 11.6208L4.11145 11.6061C4.11861 11.5939 4.12869 11.5768 4.14167 11.5552C4.16762 11.5119 4.20514 11.4505 4.25389 11.3734C4.35132 11.2194 4.4939 11.0026 4.67876 10.7438C5.04756 10.2274 5.58948 9.53736 6.28217 8.84467C7.64851 7.47833 9.70507 6 12.25 6C14.7949 6 16.8515 7.47833 18.2178 8.84467C18.9105 9.53736 19.4524 10.2274 19.8212 10.7438C20.0061 11.0026 20.1487 11.2194 20.2461 11.3734C20.2949 11.4505 20.3324 11.5119 20.3583 11.5552C20.3713 11.5768 20.3814 11.5939 20.3885 11.6061L20.3971 11.6208L20.3997 11.6253L20.4009 11.6274ZM4.09882 12.3721C3.96706 12.1415 3.96706 11.8585 4.09882 11.6279L4.75 12C4.10306 12.3697 4.09871 12.3718 4.09882 12.3721L4.09882 12.3721ZM10.75 12C10.75 11.1716 11.4216 10.5 12.25 10.5C13.0784 10.5 13.75 11.1716 13.75 12C13.75 12.8284 13.0784 13.5 12.25 13.5C11.4216 13.5 10.75 12.8284 10.75 12ZM12.25 9C10.5931 9 9.25 10.3431 9.25 12C9.25 13.6569 10.5931 15 12.25 15C13.9069 15 15.25 13.6569 15.25 12C15.25 10.3431 13.9069 9 12.25 9Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
