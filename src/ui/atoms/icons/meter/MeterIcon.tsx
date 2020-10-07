import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const MeterIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} viewBox="4 4 16 16">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5985 16.875H16.2782V13.7819C16.2782 12.3586 15.3988 11.5237 14.0353 11.5237C13.2349 11.5237 12.5432 11.9507 12.1776 12.5105C11.8022 11.8747 11.1302 11.5237 10.3002 11.5237C9.57893 11.5237 9.01572 11.8178 8.68965 12.2448V11.5806H7V16.875H8.68965V14.0001C8.68965 13.3075 9.10465 12.9279 9.74691 12.9279C10.3892 12.9279 10.8042 13.3075 10.8042 14.0001V16.875H12.4839V14.0001C12.4839 13.3075 12.8989 12.9279 13.5412 12.9279C14.1835 12.9279 14.5985 13.3075 14.5985 14.0001V16.875Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
