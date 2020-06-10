import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const SquareMeterIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} viewBox="0 0 24 33">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 21.0693V23.1801H18.0477V21.2515C18.168 21.1243 18.2888 20.9971 18.4096 20.87C20.1333 19.0555 21.842 17.2569 21.842 15.5113C21.842 14.7065 21.5574 14.1902 20.9409 14.1902C20.3361 14.1902 19.9804 14.7976 19.9804 15.8454H18.024C18.0833 13.1576 19.4468 12.0035 21.0239 12.0035C22.9921 12.0035 23.8696 13.4765 23.8696 15.3443C23.8696 17.774 22.174 19.7178 20.7986 21.0693H24ZM15.9056 32.0091H13.026V25.4359C13.026 23.8523 12.3145 22.9845 11.2135 22.9845C10.1125 22.9845 9.40104 23.8523 9.40104 25.4359V32.0091H6.52145V25.4359C6.52145 23.8523 5.81002 22.9845 4.70899 22.9845C3.60797 22.9845 2.89654 23.8523 2.89654 25.4359V32.0091H0V19.904H2.89654V21.4226C3.45552 20.4463 4.42103 19.7738 5.65757 19.7738C7.08043 19.7738 8.23227 20.5765 8.87594 22.03C9.50268 20.7501 10.6884 19.7738 12.0604 19.7738C14.398 19.7738 15.9056 21.6829 15.9056 24.9369V32.0091Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
