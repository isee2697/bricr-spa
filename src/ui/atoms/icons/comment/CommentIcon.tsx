import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core';

export const CommentIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 11.3636C4 7.71655 7.69694 5 12 5C16.3031 5 20 7.71655 20 11.3636L19.9998 11.379C19.9801 12.1578 19.798 12.925 19.4641 13.6359C19.1771 14.247 18.783 14.8059 18.2994 15.2888L18.6623 18.2907C18.6893 18.514 18.5908 18.7344 18.4033 18.8704C18.2157 19.0063 17.967 19.0378 17.7488 18.9531L14.0228 17.5063C13.3599 17.6656 12.6774 17.74 11.9933 17.7273C7.69308 17.7244 4 15.0088 4 11.3636ZM12 6.27273C8.16973 6.27273 5.33333 8.64708 5.33333 11.3636C5.33333 14.0802 8.16973 16.4545 12 16.4545L12.0136 16.4547C12.6457 16.467 13.2762 16.3893 13.8843 16.2243C14.0275 16.1854 14.1801 16.1934 14.3179 16.2469L17.2087 17.3694L16.9377 15.1275C16.9135 14.9271 16.9902 14.7277 17.1445 14.5899C17.6111 14.1731 17.9861 13.6719 18.2474 13.1153C18.5077 12.561 18.6502 11.9631 18.6667 11.3559C18.6613 8.6426 15.8267 6.27273 12 6.27273ZM12 7.54541C12.3682 7.54541 12.6667 7.83032 12.6667 8.18177V12C12.6667 12.3514 12.3682 12.6363 12 12.6363C11.6318 12.6363 11.3333 12.3514 11.3333 12V8.18177C11.3333 7.83032 11.6318 7.54541 12 7.54541ZM12.6667 14.5455C12.6667 14.897 12.3682 15.1819 12 15.1819C11.6318 15.1819 11.3333 14.897 11.3333 14.5455C11.3333 14.1941 11.6318 13.9092 12 13.9092C12.3682 13.9092 12.6667 14.1941 12.6667 14.5455Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
