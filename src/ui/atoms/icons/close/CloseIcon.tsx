import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

import * as React from 'react';

export const CloseIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.7901 6.22484C19.0705 5.94442 19.0705 5.48976 18.7901 5.20934C18.5097 4.92892 18.055 4.92892 17.7746 5.20934L11.9992 10.9847L6.22387 5.20934C5.94344 4.92892 5.48879 4.92892 5.20836 5.20934C4.92794 5.48976 4.92794 5.94442 5.20836 6.22484L10.9837 12.0002L5.20836 17.7755C4.92794 18.056 4.92794 18.5106 5.20836 18.7911C5.48879 19.0715 5.94344 19.0715 6.22387 18.7911L11.9992 13.0157L17.7746 18.7911C18.055 19.0715 18.5097 19.0715 18.7901 18.7911C19.0705 18.5106 19.0705 18.056 18.7901 17.7755L13.0147 12.0002L18.7901 6.22484Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
