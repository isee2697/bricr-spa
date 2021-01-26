import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const AlertIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.6364 5.27273C8.12182 5.27273 5.27273 8.12182 5.27273 11.6364C5.27273 15.1509 8.12182 18 11.6364 18C15.1509 18 18 15.1509 18 11.6364C18 8.12182 15.1509 5.27273 11.6364 5.27273ZM4 11.6364C4 7.41892 7.41892 4 11.6364 4C15.8538 4 19.2727 7.41892 19.2727 11.6364C19.2727 15.8538 15.8538 19.2727 11.6364 19.2727C7.41892 19.2727 4 15.8538 4 11.6364ZM11.6364 7.81785C11.9878 7.81785 12.2727 8.10276 12.2727 8.45421V12.2724C12.2727 12.6239 11.9878 12.9088 11.6364 12.9088C11.2849 12.9088 11 12.6239 11 12.2724V8.45421C11 8.10276 11.2849 7.81785 11.6364 7.81785ZM12.2727 14.818C12.2727 15.1695 11.9878 15.4544 11.6364 15.4544C11.2849 15.4544 11 15.1695 11 14.818C11 14.4666 11.2849 14.1817 11.6364 14.1817C11.9878 14.1817 12.2727 14.4666 12.2727 14.818Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
