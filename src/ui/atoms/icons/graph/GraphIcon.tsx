import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const GraphIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.33333 6.15C5.33333 5.79101 5.03486 5.5 4.66667 5.5C4.29848 5.5 4 5.79101 4 6.15V17.85C4 18.209 4.29848 18.5 4.66667 18.5H19.3333C19.7015 18.5 20 18.209 20 17.85C20 17.491 19.7015 17.2 19.3333 17.2H5.33333V6.15ZM7.33333 15.9C9.48056 15.9 10.9102 15.2818 11.9297 14.2877C12.896 13.3456 13.4393 12.1094 13.9232 11.0082L13.9232 11.0082L13.9461 10.956C14.4564 9.79521 14.9113 8.78069 15.6797 8.03149C16.4102 7.31925 17.4806 6.8 19.3333 6.8C19.7015 6.8 20 6.50899 20 6.15C20 5.79101 19.7015 5.5 19.3333 5.5C17.1861 5.5 15.7564 6.11825 14.7369 7.11226C13.7706 8.0544 13.2274 9.29061 12.7435 10.3918L12.7206 10.444C12.2103 11.6048 11.7553 12.6193 10.9869 13.3685C10.2564 14.0807 9.1861 14.6 7.33333 14.6C6.96514 14.6 6.66667 14.891 6.66667 15.25C6.66667 15.609 6.96514 15.9 7.33333 15.9Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
