import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";
import { SvgIconProps as DefaultSvgIconProps } from "@material-ui/core/SvgIcon";
import { useTheme } from "@material-ui/core/styles";
import * as React from "react";

export const ParkinglotIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
    <path d="M19.2046 19.4981C18.5195 19.9929 17.6833 20.2334 16.84 20.1781H14.8773V23.4544H12.93V14.1817H16.9637C17.7675 14.1386 18.5592 14.3915 19.1891 14.8926C19.7841 15.4675 20.0901 16.2789 20.0237 17.1026C20.0814 17.538 20.0375 17.9809 19.8954 18.3965C19.7533 18.8121 19.5168 19.1892 19.2046 19.4981ZM17.6591 16.1599C17.3583 15.932 16.9845 15.822 16.6082 15.8508H14.8773V18.5708H16.6546C17.0348 18.5908 17.409 18.4697 17.7055 18.2308C17.8388 18.0923 17.941 17.9269 18.0049 17.7456C18.0689 17.5643 18.0933 17.3714 18.0764 17.1799C18.094 16.993 18.0698 16.8046 18.0057 16.6282C17.9415 16.4518 17.839 16.2918 17.7055 16.1599H17.6591ZM24.0882 13.069C24.1883 12.8906 24.2136 12.6798 24.1586 12.4828C24.1035 12.2858 23.9726 12.1187 23.7946 12.0181L16.84 8.15442C16.7244 8.08943 16.594 8.0553 16.4614 8.0553C16.3288 8.0553 16.1984 8.08943 16.0828 8.15442L9.12821 12.0181C8.9616 12.1243 8.84203 12.2904 8.79409 12.4821C8.74614 12.6738 8.77347 12.8766 8.87044 13.0488C8.96742 13.2209 9.12667 13.3494 9.31547 13.4078C9.50426 13.4662 9.70825 13.45 9.88548 13.3626L16.5 9.65351L23.0837 13.3162C23.1727 13.3651 23.2704 13.3959 23.3713 13.4069C23.4722 13.418 23.5743 13.4091 23.6717 13.3806C23.7692 13.3522 23.8601 13.3049 23.9392 13.2413C24.0184 13.1778 24.0842 13.0993 24.133 13.0102L24.1346 13.0071L24.0882 13.069Z" 
     fill={props.color ? props.color : theme.palette.gray.main}/>
    </SvgIcon>
  );
};