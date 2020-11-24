import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const DirectoryOpenedIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon width="85" height="61" viewBox="0 0 85 61" fill="none" {...props}>
      <path
        d="M63.0172 7.74144H80.6034C82.8506 7.74144 84.5 9.22497 84.5 10.8622V56.7243C84.5 58.3614 82.8506 59.8451 80.6034 59.8451H4.39659C2.14939 59.8451 0.5 58.3614 0.5 56.7243V12.0691V10.8622V3.62072C0.5 1.98365 2.14939 0.5 4.39659 0.5H14.6552H24.7307C26.5552 0.5 28.2915 1.09312 29.5659 2.13028L34.1814 5.88674C35.6505 7.0825 37.6156 7.74144 39.6479 7.74144H42.5H49.9063H52.7584H60.1651H63.0172Z"
        fill={theme.palette.gray.main}
        fill-opacity="0.3"
        stroke={props.color ? props.color : theme.palette.primary.main}
      />
    </SvgIcon>
  );
};
