import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const HeadingTwoIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        d="M11.2052 6.5959V17.2459H9.81477V12.4175H4.39046V17.2459H3V6.5959H4.39046V11.2715H9.81477V6.5959H11.2052Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
      <path
        d="M13.1822 16.1305C14.4758 15.0914 15.4894 14.2409 16.2228 13.5787C16.9563 12.9064 17.5725 12.2087 18.0717 11.4854C18.581 10.752 18.8357 10.0338 18.8357 9.33097C18.8357 8.66885 18.6727 8.14934 18.3467 7.77244C18.0309 7.38535 17.5165 7.1918 16.8035 7.1918C16.1108 7.1918 15.5709 7.41081 15.1838 7.84883C14.8069 8.27667 14.6032 8.8522 14.5726 9.57545H13.228C13.2687 8.43456 13.6151 7.55343 14.267 6.93205C14.919 6.31067 15.7593 5.99998 16.7882 5.99998C17.8374 5.99998 18.6676 6.2903 19.2788 6.87093C19.9002 7.45156 20.2108 8.2512 20.2108 9.26985C20.2108 10.1153 19.9562 10.9404 19.4469 11.7452C18.9477 12.5397 18.3773 13.2426 17.7355 13.8538C17.0938 14.4548 16.2738 15.1576 15.2755 15.9624H20.5317V17.1236H13.1822V16.1305Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
