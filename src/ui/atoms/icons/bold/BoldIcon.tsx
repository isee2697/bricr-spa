import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const BoldIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        d="M14.4939 12.2257C15.1153 12.3581 15.6144 12.6688 15.9913 13.1577C16.3682 13.6365 16.5567 14.1866 16.5567 14.8079C16.5567 15.7043 16.2409 16.4174 15.6093 16.9471C14.9879 17.4666 14.117 17.7264 12.9965 17.7264H8V6.99998H12.8284C13.9184 6.99998 14.7689 7.24955 15.3801 7.74869C16.0015 8.24783 16.3122 8.92523 16.3122 9.7809C16.3122 10.4125 16.1441 10.9371 15.8079 11.3547C15.482 11.7724 15.044 12.0627 14.4939 12.2257ZM10.6128 11.3394H12.3242C12.752 11.3394 13.078 11.2478 13.3021 11.0644C13.5364 10.8709 13.6535 10.5907 13.6535 10.224C13.6535 9.8573 13.5364 9.57717 13.3021 9.38363C13.078 9.19008 12.752 9.09331 12.3242 9.09331H10.6128V11.3394ZM12.5381 15.6178C12.9761 15.6178 13.3123 15.521 13.5465 15.3274C13.791 15.1237 13.9133 14.8334 13.9133 14.4565C13.9133 14.0796 13.7859 13.7842 13.5313 13.5703C13.2868 13.3564 12.9455 13.2494 12.5075 13.2494H10.6128V15.6178H12.5381Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
