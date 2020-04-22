import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';

import { IconProps } from '../Icon.types';
import { palette } from 'theme/palette';

export const ShortcutsIcon = (props: IconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.81818 4.72727C9.81818 4.32561 10.1438 4 10.5455 4H13.4545C13.8562 4 14.1818 4.32561 14.1818 4.72727V7.63636C14.1818 8.03803 13.8562 8.36364 13.4545 8.36364H10.5455C10.1438 8.36364 9.81818 8.03803 9.81818 7.63636V4.72727ZM12.7273 5.45455H11.2727V6.90909H12.7273V5.45455ZM9.81818 16.3636C9.81818 15.962 10.1438 15.6364 10.5455 15.6364H13.4545C13.8562 15.6364 14.1818 15.962 14.1818 16.3636V19.2727C14.1818 19.6744 13.8562 20 13.4545 20H10.5455C10.1438 20 9.81818 19.6744 9.81818 19.2727V16.3636ZM4.72727 9.81818C4.32561 9.81818 4 10.1438 4 10.5455V13.4545C4 13.8562 4.32561 14.1818 4.72727 14.1818H7.63636C8.03803 14.1818 8.36364 13.8562 8.36364 13.4545V10.5455C8.36364 10.1438 8.03803 9.81818 7.63636 9.81818H4.72727ZM5.45455 12.7273V11.2727H6.90909V12.7273H5.45455ZM15.6364 10.5455C15.6364 10.1438 15.962 9.81818 16.3636 9.81818H19.2727C19.6744 9.81818 20 10.1438 20 10.5455V13.4545C20 13.8562 19.6744 14.1818 19.2727 14.1818H16.3636C15.962 14.1818 15.6364 13.8562 15.6364 13.4545V10.5455ZM5.45455 6.18182C5.45455 5.78016 5.78016 5.45455 6.18182 5.45455C6.58348 5.45455 6.90909 5.78016 6.90909 6.18182C6.90909 6.58348 6.58348 6.90909 6.18182 6.90909C5.78016 6.90909 5.45455 6.58348 5.45455 6.18182ZM11.2727 17.0909V18.5455H12.7273V17.0909H11.2727ZM6.18182 4C4.97683 4 4 4.97683 4 6.18182C4 7.3868 4.97683 8.36364 6.18182 8.36364C7.3868 8.36364 8.36364 7.3868 8.36364 6.18182C8.36364 4.97683 7.3868 4 6.18182 4ZM17.8182 5.45455C17.4165 5.45455 17.0909 5.78016 17.0909 6.18182C17.0909 6.58348 17.4165 6.90909 17.8182 6.90909C18.2198 6.90909 18.5455 6.58348 18.5455 6.18182C18.5455 5.78016 18.2198 5.45455 17.8182 5.45455ZM15.6364 6.18182C15.6364 4.97683 16.6132 4 17.8182 4C19.0232 4 20 4.97683 20 6.18182C20 7.3868 19.0232 8.36364 17.8182 8.36364C16.6132 8.36364 15.6364 7.3868 15.6364 6.18182ZM11.2727 12C11.2727 11.5983 11.5983 11.2727 12 11.2727C12.4017 11.2727 12.7273 11.5983 12.7273 12C12.7273 12.4017 12.4017 12.7273 12 12.7273C11.5983 12.7273 11.2727 12.4017 11.2727 12ZM12 9.81818C10.795 9.81818 9.81818 10.795 9.81818 12C9.81818 13.205 10.795 14.1818 12 14.1818C13.205 14.1818 14.1818 13.205 14.1818 12C14.1818 10.795 13.205 9.81818 12 9.81818ZM17.0909 11.2727V12.7273H18.5455V11.2727H17.0909ZM6.18182 17.0909C5.78016 17.0909 5.45455 17.4165 5.45455 17.8182C5.45455 18.2198 5.78016 18.5455 6.18182 18.5455C6.58348 18.5455 6.90909 18.2198 6.90909 17.8182C6.90909 17.4165 6.58348 17.0909 6.18182 17.0909ZM4 17.8182C4 16.6132 4.97683 15.6364 6.18182 15.6364C7.3868 15.6364 8.36364 16.6132 8.36364 17.8182C8.36364 19.0232 7.3868 20 6.18182 20C4.97683 20 4 19.0232 4 17.8182ZM17.0909 17.8182C17.0909 17.4165 17.4165 17.0909 17.8182 17.0909C18.2198 17.0909 18.5455 17.4165 18.5455 17.8182C18.5455 18.2198 18.2198 18.5455 17.8182 18.5455C17.4165 18.5455 17.0909 18.2198 17.0909 17.8182ZM17.8182 15.6364C16.6132 15.6364 15.6364 16.6132 15.6364 17.8182C15.6364 19.0232 16.6132 20 17.8182 20C19.0232 20 20 19.0232 20 17.8182C20 16.6132 19.0232 15.6364 17.8182 15.6364Z"
        fill={props.color ? props.color : palette.gray.main}
      />
    </SvgIcon>
  );
};
