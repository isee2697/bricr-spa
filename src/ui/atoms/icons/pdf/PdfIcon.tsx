import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const PdfIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon
      {...props}
      width={theme.spacing(6.5)}
      height={theme.spacing(6.5)}
      viewBox={`0 0 ${theme.spacing(6.5)} ${theme.spacing(6.5)}`}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.1819 9.91667C15.1819 9.13426 15.7874 8.5 16.5342 8.5H39.5228C40.2697 8.5 40.8751 9.13426 40.8751 9.91667V38.25C40.8751 39.0324 40.2697 39.6667 39.5228 39.6667C38.776 39.6667 38.1706 39.0324 38.1706 38.25V11.3333H16.5342C15.7874 11.3333 15.1819 10.6991 15.1819 9.91667ZM11.125 15.5826C11.125 14.8002 11.7304 14.1659 12.4773 14.1659H34.1136C34.8605 14.1659 35.4659 14.8002 35.4659 15.5826V41.0826C35.4659 41.865 34.8605 42.4993 34.1136 42.4993H12.4773C11.7304 42.4993 11.125 41.865 11.125 41.0826V15.5826ZM13.8295 16.9993V39.666H32.7614V16.9993H13.8295ZM17.8851 21.25C17.1383 21.25 16.5329 21.8843 16.5329 22.6667C16.5329 23.4491 17.1383 24.0834 17.8851 24.0834H28.7033C29.4502 24.0834 30.0556 23.4491 30.0556 22.6667C30.0556 21.8843 29.4502 21.25 28.7033 21.25H17.8851ZM16.5329 28.3325C16.5329 27.5501 17.1383 26.9158 17.8851 26.9158H28.7033C29.4502 26.9158 30.0556 27.5501 30.0556 28.3325C30.0556 29.1149 29.4502 29.7491 28.7033 29.7491H17.8851C17.1383 29.7491 16.5329 29.1149 16.5329 28.3325ZM17.8851 32.5842C17.1383 32.5842 16.5329 33.2185 16.5329 34.0009C16.5329 34.7833 17.1383 35.4176 17.8851 35.4176H23.2942C24.0411 35.4176 24.6465 34.7833 24.6465 34.0009C24.6465 33.2185 24.0411 32.5842 23.2942 32.5842H17.8851Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
