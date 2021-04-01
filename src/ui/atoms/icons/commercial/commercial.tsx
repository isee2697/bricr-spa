import SvgIcon from "@material-ui/core/SvgIcon/SvgIcon";
import { SvgIconProps as DefaultSvgIconProps } from "@material-ui/core/SvgIcon";
import { useTheme } from "@material-ui/core/styles";
import * as React from "react";

export const CommercialIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        d="M16.0004 20H11.2004V16.25H9.60043V22.25C9.60043 22.6648 9.95793 23 10.4004 23H16.8004C17.2429 23 17.6004 22.6648 17.6004 22.25V16.25H16.0004V20ZM23.8654 14.3328L21.7329 11.3328C21.5829 11.1242 21.3329 11 21.0654 11H10.9354C10.6679 11 10.4179 11.1242 10.2704 11.3328L8.13793 14.3328C7.78293 14.832 8.16293 15.5 8.80293 15.5H23.2004C23.8379 15.5 24.2179 14.832 23.8654 14.3328ZM20.8004 22.625C20.8004 22.8313 20.9804 23 21.2004 23H22.0004C22.2204 23 22.4004 22.8313 22.4004 22.625V16.25H20.8004V22.625Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
