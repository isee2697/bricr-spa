import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const ThumbDownIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M7.61713 4.5C6.55963 4.5 5.63713 5.247 5.41438 6.28125L3.79663 13.7812C3.50113 15.1672 4.58563 16.5 6.00013 16.5H10.3126L10.1716 17.0625C10.0194 17.1795 9.92263 17.2297 9.70363 17.5312C9.35113 18.0112 9.00013 18.756 9.00013 19.758C9.00013 20.8275 9.96763 21.75 11.1796 21.75H11.4841L11.7189 21.5392L16.8046 16.5H20.2501V4.5H7.61713ZM7.61713 6H15.7501V15.4455L10.9456 20.1795C10.6291 20.118 10.5001 19.989 10.5001 19.758C10.5001 19.0807 10.7049 18.6623 10.8984 18.3983C11.0919 18.135 11.2269 18.0705 11.2269 18.0705L11.4849 17.9295L11.5779 17.625L12.0234 15.9375L12.2581 15H6.00013C5.50513 15 5.17138 14.5695 5.27338 14.0858L6.86713 6.58575C6.94363 6.234 7.26013 6 7.61713 6ZM17.2501 6H18.7501V15H17.2501V6Z"
        fill={props.color ? props.color : theme.palette.error.main}
      />
    </SvgIcon>
  );
};
