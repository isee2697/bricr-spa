import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const SiteIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.57143 5C5.15127 5 4 6.15127 4 7.57143V9.66685V17.0952C4 18.5154 5.15127 19.6667 6.57143 19.6667H8.64998L8.66592 19.6669L8.68187 19.6667H17.4286C18.8487 19.6667 20 18.5154 20 17.0952V9.66685V7.57143C20 6.15127 18.8487 5 17.4286 5H6.57143ZM18.6667 9.00019V7.57143C18.6667 6.88765 18.1124 6.33333 17.4286 6.33333H6.57143C5.88765 6.33333 5.33333 6.88765 5.33333 7.57143V9.00019H8.66592H18.6667ZM5.33333 10.3335V17.0952C5.33333 17.779 5.88765 18.3333 6.57143 18.3333H7.99926V10.3335H5.33333ZM9.33259 18.3333V10.3335H18.6667V17.0952C18.6667 17.779 18.1124 18.3333 17.4286 18.3333H9.33259ZM6.66629 8.33343C7.03448 8.33343 7.33296 8.03495 7.33296 7.66676C7.33296 7.29857 7.03448 7.00009 6.66629 7.00009C6.2981 7.00009 5.99963 7.29857 5.99963 7.66676C5.99963 8.03495 6.2981 8.33343 6.66629 8.33343ZM9.33259 7.66676C9.33259 8.03495 9.03411 8.33343 8.66592 8.33343C8.29773 8.33343 7.99926 8.03495 7.99926 7.66676C7.99926 7.29857 8.29773 7.00009 8.66592 7.00009C9.03411 7.00009 9.33259 7.29857 9.33259 7.66676ZM10.3802 12.0478C10.3802 11.6796 10.6787 11.3811 11.0469 11.3811H15.0469C15.4151 11.3811 15.7135 11.6796 15.7135 12.0478C15.7135 12.416 15.4151 12.7145 15.0469 12.7145H11.0469C10.6787 12.7145 10.3802 12.416 10.3802 12.0478ZM12.6659 7.66676C12.6659 8.03495 12.3674 8.33343 11.9993 8.33343C11.6311 8.33343 11.3326 8.03495 11.3326 7.66676C11.3326 7.29857 11.6311 7.00009 11.9993 7.00009C12.3674 7.00009 12.6659 7.29857 12.6659 7.66676Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
