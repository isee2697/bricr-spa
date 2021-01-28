import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const HeadIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <circle cx="80" cy="80" r="80" fill={props.color ? props.color : theme.palette.gray.main} />
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="160" height="160">
        <circle cx="80" cy="80" r="80" fill={props.color ? props.color : theme.palette.gray.main} />
      </mask>
      <g mask="url(#mask0)">
        <path
          d="M132.999 124.222L109.282 110C101.449 116.894 91.21 121.111 79.9822 121.111C68.7544 121.111 58.5155 116.894 50.6822 110L26.9655 124.222C21.9711 127.217 18.8711 132.689 18.8711 138.511V160H141.093V138.511C141.093 132.689 137.993 127.217 132.999 124.222Z"
          fill={props.fill ? props.fill : theme.palette.white.main}
        />
        <path
          d="M79.9974 110C61.5863 110 46.6641 95.0779 46.6641 76.6668V60.0001C46.6641 41.589 61.5863 26.6667 79.9974 26.6667C98.4085 26.6667 113.331 41.589 113.331 60.0001V76.6668C113.331 95.0779 98.4085 110 79.9974 110Z"
          fill={props.fill ? props.fill : theme.palette.white.main}
        />
      </g>
    </SvgIcon>
  );
};
