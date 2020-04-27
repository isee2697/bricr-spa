import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core';

export const SearchIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.45453 10.5454C5.45453 7.73378 7.73378 5.45453 10.5454 5.45453C13.357 5.45453 15.6362 7.73378 15.6362 10.5454C15.6362 11.939 15.0762 13.2019 14.169 14.1212C14.1608 14.1287 14.1527 14.1364 14.1447 14.1444C14.1367 14.1523 14.129 14.1604 14.1215 14.1687C13.2021 15.0761 11.9392 15.6362 10.5454 15.6362C7.73378 15.6362 5.45453 13.357 5.45453 10.5454ZM14.6311 15.6593C13.5113 16.5551 12.0909 17.0908 10.5454 17.0908C6.93047 17.0908 4 14.1603 4 10.5454C4 6.93047 6.93047 4 10.5454 4C14.1603 4 17.0908 6.93047 17.0908 10.5454C17.0908 12.0907 16.5552 13.511 15.6596 14.6307L19.787 18.7581C20.071 19.0421 20.071 19.5026 19.787 19.7866C19.503 20.0706 19.0425 20.0706 18.7585 19.7866L14.6311 15.6593Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
