import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const MobileIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon
      {...props}
      width={theme.spacing(5)}
      height={theme.spacing(5)}
      viewBox={`0 0 ${theme.spacing(5)} ${theme.spacing(5)}`}
    >
      <path
        d="M26.5 2.0625C27.047 2.0625 27.5716 2.2798 27.9584 2.66659C28.3452 3.05339 28.5625 3.57799 28.5625 4.125V28.875C28.5625 29.422 28.3452 29.9466 27.9584 30.3334C27.5716 30.7202 27.047 30.9375 26.5 30.9375H14.125C13.578 30.9375 13.0534 30.7202 12.6666 30.3334C12.2798 29.9466 12.0625 29.422 12.0625 28.875V4.125C12.0625 3.57799 12.2798 3.05339 12.6666 2.66659C13.0534 2.2798 13.578 2.0625 14.125 2.0625H26.5ZM14.125 0C13.031 0 11.9818 0.434597 11.2082 1.20818C10.4346 1.98177 10 3.03098 10 4.125V28.875C10 29.969 10.4346 31.0182 11.2082 31.7918C11.9818 32.5654 13.031 33 14.125 33H26.5C27.594 33 28.6432 32.5654 29.4168 31.7918C30.1904 31.0182 30.625 29.969 30.625 28.875V4.125C30.625 3.03098 30.1904 1.98177 29.4168 1.20818C28.6432 0.434597 27.594 0 26.5 0L14.125 0Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
      <path
        d="M20.3125 28.875C20.8595 28.875 21.3841 28.6577 21.7709 28.2709C22.1577 27.8841 22.375 27.3595 22.375 26.8125C22.375 26.2655 22.1577 25.7409 21.7709 25.3541C21.3841 24.9673 20.8595 24.75 20.3125 24.75C19.7655 24.75 19.2409 24.9673 18.8541 25.3541C18.4673 25.7409 18.25 26.2655 18.25 26.8125C18.25 27.3595 18.4673 27.8841 18.8541 28.2709C19.2409 28.6577 19.7655 28.875 20.3125 28.875Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
