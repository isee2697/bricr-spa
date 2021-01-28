import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const TravelBeforeIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} width="13" height="12" viewBox="0 0 13 12" fill="none">
      <path
        d="M6 10.4999C5.20435 10.4999 4.44129 10.1838 3.87868 9.6212C3.31607 9.05859 3 8.29553 3 7.49988"
        stroke={props.color ? props.color : theme.palette.gray.main}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 3C5 4.1045 3 6 3 6C3 6 1 4.1045 1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1C3.53043 1 4.03914 1.21071 4.41421 1.58579C4.78929 1.96086 5 2.46957 5 3V3Z"
        stroke={props.color ? props.color : theme.palette.gray.main}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 6.5C12 8.157 9 11.25 9 11.25C9 11.25 6 8.157 6 6.5C6 5.70435 6.31607 4.94129 6.87868 4.37868C7.44129 3.81607 8.20435 3.5 9 3.5C9.79565 3.5 10.5587 3.81607 11.1213 4.37868C11.6839 4.94129 12 5.70435 12 6.5Z"
        stroke={props.color ? props.color : theme.palette.gray.main}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M3 3.5C3.27614 3.5 3.5 3.27614 3.5 3C3.5 2.72386 3.27614 2.5 3 2.5C2.72386 2.5 2.5 2.72386 2.5 3C2.5 3.27614 2.72386 3.5 3 3.5Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
      <path
        d="M9 7.5C9.55228 7.5 10 7.05228 10 6.5C10 5.94772 9.55228 5.5 9 5.5C8.44772 5.5 8 5.94772 8 6.5C8 7.05228 8.44772 7.5 9 7.5Z"
        stroke={props.color ? props.color : theme.palette.gray.main}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};
