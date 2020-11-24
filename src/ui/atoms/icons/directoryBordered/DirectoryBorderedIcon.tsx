import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';
import * as React from 'react';

export const DirectoryBorderedIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon width="93" height="74" viewBox="0 0 93 74" fill="none" {...props}>
      <path
        d="M84.6034 12.069H67.0172H64.1651H56.7584H53.9063H46.5H43.6479C41.7194 12.069 39.8687 11.4429 38.4971 10.3265L33.8815 6.56999C32.5097 5.45355 30.6591 4.82751 28.7307 4.82751H18.6552H8.39659C5.96845 4.82751 4 6.44859 4 8.44824V15.6897V16.8966V61.5518C4 63.5515 5.96845 65.1726 8.39659 65.1726H84.6034C87.0316 65.1726 89 63.5515 89 61.5518V15.6897C89 13.6899 87.0316 12.069 84.6034 12.069ZZ"
        stroke={props.color ? props.color : theme.palette.gray.main}
        strokeDasharray="2 4"
        fill="none"
      />
    </SvgIcon>
  );
};
