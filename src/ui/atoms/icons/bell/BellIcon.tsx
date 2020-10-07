import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

import * as React from 'react';

export const BellIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 4C10.6498 4 9.35491 4.56197 8.40018 5.56228C7.44545 6.56259 6.90909 7.9193 6.90909 9.33395V11.3342C6.90909 12.1911 6.55458 12.7199 6.11374 13.2433C6.06276 13.3039 6.00673 13.3685 5.94817 13.436C5.77087 13.6405 5.57037 13.8718 5.41683 14.097C5.19597 14.421 5 14.8267 5 15.3346C5 15.9002 5.31434 16.3401 5.69247 16.6503C6.07072 16.9606 6.58354 17.2052 7.17443 17.3968C8.36269 17.7819 10.0229 18.0016 12 18.0016C13.9771 18.0016 15.6373 17.7819 16.8256 17.3968C17.4165 17.2052 17.9293 16.9606 18.3075 16.6503C18.6857 16.3401 19 15.9002 19 15.3346C19 14.8267 18.804 14.421 18.5832 14.097C18.4296 13.8718 18.2291 13.6405 18.0518 13.436C17.9933 13.3685 17.9372 13.3038 17.8863 13.2433C17.4454 12.7199 17.0909 12.1911 17.0909 11.3342V9.33395C17.0909 7.9193 16.5545 6.56259 15.5998 5.56228C14.6451 4.56197 13.3502 4 12 4ZM9.30014 6.5052C10.0162 5.75496 10.9874 5.33349 12 5.33349C13.0126 5.33349 13.9838 5.75496 14.6999 6.5052C15.4159 7.25543 15.8182 8.27296 15.8182 9.33395V11.3342C15.8182 12.6775 16.4182 13.5156 16.9319 14.1256C17.0146 14.2237 17.0896 14.3103 17.1584 14.3897L17.1584 14.3897L17.1585 14.3897C17.316 14.5715 17.4405 14.7152 17.5475 14.8721C17.6846 15.0732 17.7273 15.2092 17.7273 15.3346L17.7273 15.3347C17.7273 15.3378 17.7292 15.4311 17.5229 15.6004C17.3145 15.7714 16.9642 15.956 16.4494 16.1228C15.4263 16.4545 13.9047 16.6681 12 16.6681C10.0953 16.6681 8.57367 16.4545 7.55057 16.1228C7.03577 15.956 6.68553 15.7714 6.47713 15.6004C6.27079 15.4311 6.27266 15.3378 6.27273 15.3347L6.27273 15.3346C6.27273 15.2092 6.3154 15.0732 6.45249 14.8721C6.55947 14.7152 6.68401 14.5715 6.84155 14.3897L6.84156 14.3897L6.84161 14.3896C6.91038 14.3103 6.98544 14.2237 7.06808 14.1256C7.58178 13.5156 8.18182 12.6775 8.18182 11.3342V9.33395C8.18182 8.27296 8.58409 7.25543 9.30014 6.5052ZM10.1836 18.6019C10.7525 18.6459 11.357 18.6685 12.0004 18.6685C12.6438 18.6685 13.2483 18.6459 13.8172 18.6019C13.6959 19.0072 13.4543 19.3614 13.1275 19.6129C12.8007 19.8644 12.4059 20 12.0004 20C11.595 20 11.2001 19.8644 10.8733 19.6129C10.5465 19.3614 10.3049 19.0072 10.1836 18.6019Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};
