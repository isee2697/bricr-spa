import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const PhoneIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        d="M5.61444 10.6261C6.65444 12.67 8.33 14.3456 10.3739 15.3856L11.9628 13.7967C12.165 13.5944 12.4467 13.5367 12.6994 13.6161C13.5083 13.8833 14.375 14.0278 15.2778 14.0278C15.4693 14.0278 15.653 14.1039 15.7885 14.2393C15.9239 14.3748 16 14.5585 16 14.75V17.2778C16 17.4693 15.9239 17.653 15.7885 17.7885C15.653 17.9239 15.4693 18 15.2778 18C12.0215 18 8.89861 16.7065 6.59608 14.4039C4.29355 12.1014 3 8.97849 3 5.72222C3 5.53068 3.07609 5.34698 3.21153 5.21153C3.34698 5.07609 3.53068 5 3.72222 5H6.25C6.44155 5 6.62525 5.07609 6.76069 5.21153C6.89613 5.34698 6.97222 5.53068 6.97222 5.72222C6.97222 6.625 7.11667 7.49167 7.38389 8.30056C7.46333 8.55333 7.40556 8.835 7.20333 9.03722L5.61444 10.6261Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
