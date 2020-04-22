import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';

import { palette } from 'theme/palette';

export const BuildingIcon = (props: DefaultSvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.154 4.04429C11.9905 3.98524 11.8103 3.98524 11.6468 4.04429L5.86902 6.13125C5.58714 6.23307 5.40039 6.49263 5.40039 6.78261V19.3044C5.40039 19.6886 5.72374 20 6.12261 20H17.6782C18.077 20 18.4004 19.6886 18.4004 19.3044V6.78261C18.4004 6.49263 18.2136 6.23307 17.9318 6.13125L12.154 4.04429ZM6.84484 18.6087V7.2647L11.9004 5.43861L16.9559 7.2647V18.6087H13.3456V15.8262H10.4567V18.6087H6.84484ZM9.73401 9.56529C9.73401 9.18109 9.41066 8.86964 9.01179 8.86964C8.61292 8.86964 8.28957 9.18109 8.28957 9.56529V10.2609C8.28957 10.6451 8.61292 10.9566 9.01179 10.9566C9.41066 10.9566 9.73401 10.6451 9.73401 10.2609V9.56529ZM11.901 8.86964C12.2998 8.86964 12.6232 9.18109 12.6232 9.56529V10.2609C12.6232 10.6451 12.2998 10.9566 11.901 10.9566C11.5021 10.9566 11.1787 10.6451 11.1787 10.2609V9.56529C11.1787 9.18109 11.5021 8.86964 11.901 8.86964ZM15.5114 9.56529C15.5114 9.18109 15.188 8.86964 14.7891 8.86964C14.3903 8.86964 14.0669 9.18109 14.0669 9.56529V10.2609C14.0669 10.6451 14.3903 10.9566 14.7891 10.9566C15.188 10.9566 15.5114 10.6451 15.5114 10.2609V9.56529ZM9.01179 12.3477C9.41066 12.3477 9.73401 12.6591 9.73401 13.0433V13.739C9.73401 14.1232 9.41066 14.4346 9.01179 14.4346C8.61292 14.4346 8.28957 14.1232 8.28957 13.739V13.0433C8.28957 12.6591 8.61292 12.3477 9.01179 12.3477ZM12.6232 13.0433C12.6232 12.6591 12.2998 12.3477 11.901 12.3477C11.5021 12.3477 11.1787 12.6591 11.1787 13.0433V13.739C11.1787 14.1232 11.5021 14.4346 11.901 14.4346C12.2998 14.4346 12.6232 14.1232 12.6232 13.739V13.0433ZM14.7891 12.3477C15.188 12.3477 15.5114 12.6591 15.5114 13.0433V13.739C15.5114 14.1232 15.188 14.4346 14.7891 14.4346C14.3903 14.4346 14.0669 14.1232 14.0669 13.739V13.0433C14.0669 12.6591 14.3903 12.3477 14.7891 12.3477Z"
        fill={props.color ? props.color : palette.gray.main}
      />
    </SvgIcon>
  );
};
