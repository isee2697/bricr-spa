import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

import * as React from 'react';

export const SquareMeterIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} viewBox="4 4 16 16">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 12.0901V13.0133H15.5278V12.1698C15.598 12.1142 15.6685 12.0586 15.7389 12.003C16.7444 11.2094 17.7412 10.4227 17.7412 9.65925C17.7412 9.30723 17.5752 9.08141 17.2155 9.08141C16.8627 9.08141 16.6552 9.34709 16.6552 9.80537H15.514C15.5486 8.62977 16.344 8.125 17.2639 8.125C18.4121 8.125 18.9239 8.76925 18.9239 9.58619C18.9239 10.6489 17.9348 11.499 17.1325 12.0901H19ZM14.2782 16.875H12.5985V14C12.5985 13.3074 12.1835 12.9279 11.5412 12.9279C10.8989 12.9279 10.4839 13.3074 10.4839 14V16.875H8.80418V14C8.80418 13.3074 8.38917 12.9279 7.74691 12.9279C7.10465 12.9279 6.68965 13.3074 6.68965 14V16.875H5V11.5805H6.68965V12.2447C7.01572 11.8177 7.57893 11.5236 8.30025 11.5236C9.13025 11.5236 9.80215 11.8747 10.1776 12.5104C10.5432 11.9506 11.2349 11.5236 12.0353 11.5236C13.3988 11.5236 14.2782 12.3586 14.2782 13.7818V16.875Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
