import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';

import { palette } from 'theme/palette';

export const FilterIcon = (props: DefaultSvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.66667 5C4.29848 5 4 5.3134 4 5.7C4 6.0866 4.29848 6.4 4.66667 6.4H19.3333C19.7015 6.4 20 6.0866 20 5.7C20 5.3134 19.7015 5 19.3333 5H4.66667ZM6.66629 9.2002C6.2981 9.2002 5.99963 9.5136 5.99963 9.9002C5.99963 10.2868 6.2981 10.6002 6.66629 10.6002H17.333C17.7012 10.6002 17.9996 10.2868 17.9996 9.9002C17.9996 9.5136 17.7012 9.2002 17.333 9.2002H6.66629ZM7.99926 14.0999C7.99926 13.7133 8.29773 13.3999 8.66592 13.3999H15.3326C15.7008 13.3999 15.9993 13.7133 15.9993 14.0999C15.9993 14.4865 15.7008 14.7999 15.3326 14.7999H8.66592C8.29773 14.7999 7.99926 14.4865 7.99926 14.0999ZM10.6674 17.6001C10.2992 17.6001 10.0007 17.9135 10.0007 18.3001C10.0007 18.6867 10.2992 19.0001 10.6674 19.0001H13.3341C13.7023 19.0001 14.0007 18.6867 14.0007 18.3001C14.0007 17.9135 13.7023 17.6001 13.3341 17.6001H10.6674Z"
        fill={props.color ? props.color : palette.gray.main}
      />
    </SvgIcon>
  );
};
