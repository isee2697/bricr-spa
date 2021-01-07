import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const SalesIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} width={theme.spacing(3)} height={theme.spacing(3)} viewBox={theme.spacing(0, 0, 3, 3)}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.7048 4.64662C19.729 4.66508 19.752 4.68504 19.7738 4.70638C19.8444 4.77554 19.8987 4.85608 19.9364 4.94272C19.9753 5.03199 19.9978 5.13054 19.9998 5.23427M18.5455 7.20447V10.5C18.5455 10.9142 18.8711 11.25 19.2727 11.25C19.6744 11.25 20 10.9142 20 10.5V5.25346M18.5455 7.20447L13.2678 13.2517C13.1344 13.4047 12.9458 13.4943 12.7464 13.4997C12.5469 13.5052 12.3541 13.4258 12.213 13.2803L8.36364 9.31066L5.24153 12.5303C4.95751 12.8232 4.49703 12.8232 4.21301 12.5303C3.929 12.2374 3.929 11.7626 4.21301 11.4697L7.84938 7.71967C8.13339 7.42678 8.59388 7.42678 8.8779 7.71967L12.6995 11.6607L17.6397 6H14.1818C13.7802 6 13.4545 5.66421 13.4545 5.25C13.4545 4.83579 13.7802 4.5 14.1818 4.5H19.2727C19.2858 4.5 19.2987 4.50035 19.3116 4.50105"
        fill={props.color ? props.color : theme.palette.white.main}
      />
    </SvgIcon>
  );
};
