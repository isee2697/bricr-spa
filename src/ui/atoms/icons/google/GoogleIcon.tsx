import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import * as React from 'react';

export const GoogleIcon = (props: DefaultSvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <g clip-path="url(#clip0)">
        <path
          d="M21.183 12.1842C21.183 11.6403 21.1389 11.0936 21.0448 10.5586H13.499V13.6392H17.8202C17.6408 14.6328 17.0647 15.5117 16.221 16.0703V18.0692H18.799C20.3129 16.6758 21.183 14.6181 21.183 12.1842Z"
          fill="#4285F4"
        />
        <path
          d="M13.5001 20.0002C15.6577 20.0002 17.4773 19.2918 18.803 18.0689L16.225 16.07C15.5078 16.558 14.5818 16.8343 13.503 16.8343C11.4159 16.8343 9.64632 15.4263 9.01137 13.5332H6.35107V15.5938C7.70915 18.2953 10.4753 20.0002 13.5001 20.0002Z"
          fill="#34A853"
        />
        <path
          d="M9.00787 13.5328C8.67276 12.5393 8.67276 11.4634 9.00787 10.4698V8.40918H6.35051C5.21584 10.6697 5.21584 13.3329 6.35051 15.5935L9.00787 13.5328Z"
          fill="#FBBC04"
        />
        <path
          d="M13.5001 7.16644C14.6406 7.1488 15.743 7.57798 16.569 8.36578L18.853 6.08174C17.4067 4.72367 15.4872 3.97702 13.5001 4.00054C10.4753 4.00054 7.70915 5.70548 6.35107 8.40987L9.00843 10.4705C9.64044 8.57449 11.413 7.16644 13.5001 7.16644Z"
          fill="#EA4335"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="15.6825" height="16" fill="white" transform="translate(5.5 4)" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
