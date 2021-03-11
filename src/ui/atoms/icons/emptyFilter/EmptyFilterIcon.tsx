import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const EmptyFilterIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon
      {...props}
      width={theme.spacing(6)}
      height={theme.spacing(6)}
      viewBox={`0 0 ${theme.spacing(6)} ${theme.spacing(6)}`}
      fill="none"
    >
      <path d="M29 23H19L7 9H41L29 23Z" fill="#F57C00" />
      <path d="M29 38L19 44V23H29V38Z" fill="#FF9800" />
      <path
        d="M41.5 9H6.5C5.7 9 5 8.3 5 7.5C5 6.7 5.7 6 6.5 6H41.5C42.3 6 43 6.7 43 7.5C43 8.3 42.3 9 41.5 9Z"
        fill="#FF9800"
      />
      <path
        d="M38 48C43.5228 48 48 43.5228 48 38C48 32.4772 43.5228 28 38 28C32.4772 28 28 32.4772 28 38C28 43.5228 32.4772 48 38 48Z"
        fill="#F44336"
      />
      <path d="M44 36H32V40H44V36Z" fill="white" />
    </SvgIcon>
  );
};
