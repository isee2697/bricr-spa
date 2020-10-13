import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';

import * as React from 'react';
import { BaseIcon } from '../baseIcon/BaseIcon';

export const DownloadIcon = (props: DefaultSvgIconProps) => (
  <BaseIcon
    {...props}
    d="M5.59848 5C5.26795 5 5 5.26795 5 5.59848V16.3712C5 16.8474 5.18916 17.3041 5.52588 17.6408C5.86259 17.9775 6.31927 18.1667 6.79545 18.1667H9.18939C9.51993 18.1667 9.78788 17.8987 9.78788 17.5682C9.78788 17.2376 9.51993 16.9697 9.18939 16.9697H6.79545C6.63673 16.9697 6.4845 16.9066 6.37226 16.7944C6.26002 16.6822 6.19697 16.5299 6.19697 16.3712V6.19697H10.0871L11.703 8.35152C11.8161 8.50222 11.9934 8.59091 12.1818 8.59091H18.1667V16.3712C18.1667 16.5299 18.1036 16.6822 17.9914 16.7944C17.8791 16.9066 17.7269 16.9697 17.5682 16.9697H15.1742C14.8437 16.9697 14.5758 17.2376 14.5758 17.5682C14.5758 17.8987 14.8437 18.1667 15.1742 18.1667H17.5682C18.0444 18.1667 18.501 17.9775 18.8378 17.6408C19.1745 17.3041 19.3636 16.8474 19.3636 16.3712V7.99242C19.3636 7.66189 19.0957 7.39394 18.7651 7.39394H12.4811L10.8652 5.23939C10.7521 5.08869 10.5747 5 10.3864 5H5.59848ZM12.1832 10.3864C12.5137 10.3864 12.7816 10.6543 12.7816 10.9848V15.5222L14.1512 14.1526C14.385 13.9188 14.7639 13.9188 14.9976 14.1526C15.2313 14.3863 15.2313 14.7652 14.9976 14.999L12.6387 17.3578C12.5289 17.4866 12.3656 17.5682 12.1832 17.5682L12.1818 17.5682C12.0282 17.5685 11.8745 17.5101 11.7573 17.3929L9.36335 14.999C9.12963 14.7652 9.12963 14.3863 9.36335 14.1526C9.59707 13.9188 9.97601 13.9188 10.2097 14.1526L11.5847 15.5275V10.9848C11.5847 10.6543 11.8526 10.3864 12.1832 10.3864Z"
  />
);
