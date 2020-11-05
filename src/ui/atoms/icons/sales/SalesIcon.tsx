import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const SalesIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} width={theme.spacing(4.5)} height={theme.spacing(4.5)} viewBox={theme.spacing(0, 0, 4.5, 4.5)}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31.3462 12.2962C31.2879 12.1611 31.2033 12.0355 31.0929 11.928C31.0863 11.9216 31.0797 11.9153 31.073 11.9091C31.0381 11.8767 31.0018 11.847 30.9642 11.82C30.8015 11.7028 30.6163 11.6359 30.428 11.6183C30.3941 11.6151 30.3601 11.6135 30.3261 11.6135H22.5103C21.8936 11.6135 21.3937 12.129 21.3937 12.765C21.3937 13.4009 21.8936 13.9164 22.5103 13.9164H27.819L20.2346 22.6069L14.3675 16.5565C13.9314 16.1068 13.2245 16.1068 12.7885 16.5565L7.20575 22.3137C6.76971 22.7633 6.76971 23.4924 7.20575 23.942C7.64179 24.3917 8.34874 24.3917 8.78478 23.942L13.578 18.9991L19.4877 25.0935C19.7043 25.3168 20.0003 25.4386 20.3066 25.4303C20.6128 25.422 20.9022 25.2843 21.1071 25.0495L29.2095 15.7656V20.825C29.2095 21.4609 29.7094 21.9764 30.3261 21.9764C30.9427 21.9764 31.4426 21.4609 31.4426 20.825V12.771V12.765C31.4426 12.7556 31.4425 12.7464 31.4423 12.7371"
        fill={props.color ? props.color : theme.palette.white.main}
      />
    </SvgIcon>
  );
};
