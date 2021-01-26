import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const TravelAfterIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} width="13" height="12" viewBox="0 0 13 12" fill="none">
      <path
        d="M8 2C8.53043 2 9.03914 2.31607 9.41421 2.87868C9.78929 3.44129 10 4.20435 10 5"
        stroke={props.color ? props.color : theme.palette.gray.main}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9C12 10.1045 10 12 10 12C10 12 8 10.1045 8 9C8 8.46957 8.21071 7.96086 8.58579 7.58579C8.96086 7.21071 9.46957 7 10 7C10.5304 7 11.0391 7.21071 11.4142 7.58579C11.7893 7.96086 12 8.46957 12 9V9Z"
        stroke={props.color ? props.color : theme.palette.gray.main}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M7 4C7 5.657 4 8.75 4 8.75C4 8.75 1 5.657 1 4C1 3.20435 1.31607 2.44129 1.87868 1.87868C2.44129 1.31607 3.20435 1 4 1C4.79565 1 5.55871 1.31607 6.12132 1.87868C6.68393 2.44129 7 3.20435 7 4Z"
        stroke={props.color ? props.color : theme.palette.gray.main}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M10 9.5C10.2761 9.5 10.5 9.27614 10.5 9C10.5 8.72386 10.2761 8.5 10 8.5C9.72386 8.5 9.5 8.72386 9.5 9C9.5 9.27614 9.72386 9.5 10 9.5Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
      <path
        d="M4 5C4.55228 5 5 4.55228 5 4C5 3.44772 4.55228 3 4 3C3.44772 3 3 3.44772 3 4C3 4.55228 3.44772 5 4 5Z"
        stroke={props.color ? props.color : theme.palette.gray.main}
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </SvgIcon>
  );
};
