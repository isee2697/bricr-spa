import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import { SvgIconProps as DefaultSvgIconProps } from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/core/styles';

export const StatusIcon = (props: DefaultSvgIconProps) => {
  const theme = useTheme();

  return (
    <SvgIcon {...props} viewBox="0 0 12 12">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.00054 1.4445C5.69372 1.4445 5.44499 1.69323 5.44499 2.00005C5.44499 2.30688 5.69372 2.55561 6.00054 2.55561C6.30737 2.55561 6.5561 2.30688 6.5561 2.00005C6.5561 1.69323 6.30737 1.4445 6.00054 1.4445ZM4.77832 2.00005C4.77832 1.32504 5.32553 0.777832 6.00054 0.777832C6.67556 0.777832 7.22276 1.32504 7.22276 2.00005C7.22276 2.67507 6.67556 3.22228 6.00054 3.22228C5.32553 3.22228 4.77832 2.67507 4.77832 2.00005Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.82866 2.66056C8.54638 2.66056 8.31755 2.8894 8.31755 3.17167C8.31755 3.45395 8.54638 3.68279 8.82866 3.68279C9.11094 3.68279 9.33977 3.45395 9.33977 3.17167C9.33977 2.8894 9.11094 2.66056 8.82866 2.66056ZM7.65088 3.17167C7.65088 2.52121 8.17819 1.9939 8.82866 1.9939C9.47913 1.9939 10.0064 2.52121 10.0064 3.17167C10.0064 3.82214 9.47913 4.34945 8.82866 4.34945C8.17819 4.34945 7.65088 3.82214 7.65088 3.17167Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0005 5.53337C9.74279 5.53337 9.53385 5.7423 9.53385 6.00003C9.53385 6.25777 9.74279 6.4667 10.0005 6.4667C10.2583 6.4667 10.4672 6.25777 10.4672 6.00003C10.4672 5.7423 10.2583 5.53337 10.0005 5.53337ZM8.86719 6.00003C8.86719 5.37411 9.3746 4.8667 10.0005 4.8667C10.6264 4.8667 11.1339 5.37411 11.1339 6.00003C11.1339 6.62596 10.6264 7.13337 10.0005 7.13337C9.3746 7.13337 8.86719 6.62596 8.86719 6.00003Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.82864 8.40617C8.59545 8.40617 8.40641 8.5952 8.40641 8.82839C8.40641 9.06158 8.59545 9.25061 8.82864 9.25061C9.06182 9.25061 9.25086 9.06158 9.25086 8.82839C9.25086 8.5952 9.06182 8.40617 8.82864 8.40617ZM7.73975 8.82839C7.73975 8.22701 8.22726 7.7395 8.82864 7.7395C9.43001 7.7395 9.91752 8.22701 9.91752 8.82839C9.91752 9.42977 9.43001 9.91728 8.82864 9.91728C8.22726 9.91728 7.73975 9.42977 7.73975 8.82839Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.0005 9.62223C5.79186 9.62223 5.62272 9.79137 5.62272 10C5.62272 10.2087 5.79186 10.3778 6.0005 10.3778C6.20914 10.3778 6.37828 10.2087 6.37828 10C6.37828 9.79137 6.20914 9.62223 6.0005 9.62223ZM4.95605 10C4.95605 9.42318 5.42367 8.95557 6.0005 8.95557C6.57733 8.95557 7.04494 9.42318 7.04494 10C7.04494 10.5768 6.57733 11.0445 6.0005 11.0445C5.42367 11.0445 4.95605 10.5768 4.95605 10Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.17188 8.49504C2.98778 8.49504 2.83854 8.64427 2.83854 8.82837C2.83854 9.01246 2.98778 9.1617 3.17188 9.1617C3.35597 9.1617 3.50521 9.01246 3.50521 8.82837C3.50521 8.64427 3.35597 8.49504 3.17188 8.49504ZM2.17188 8.82837C2.17188 8.27608 2.61959 7.82837 3.17188 7.82837C3.72416 7.82837 4.17188 8.27608 4.17188 8.82837C4.17188 9.38065 3.72416 9.82837 3.17188 9.82837C2.61959 9.82837 2.17188 9.38065 2.17188 8.82837Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.00048 5.7111C1.84093 5.7111 1.71159 5.84044 1.71159 5.99999C1.71159 6.15954 1.84093 6.28888 2.00048 6.28888C2.16003 6.28888 2.28937 6.15954 2.28937 5.99999C2.28937 5.84044 2.16003 5.7111 2.00048 5.7111ZM1.04492 5.99999C1.04492 5.47225 1.47274 5.04443 2.00048 5.04443C2.52822 5.04443 2.95603 5.47225 2.95603 5.99999C2.95603 6.52773 2.52822 6.95554 2.00048 6.95554C1.47274 6.95554 1.04492 6.52773 1.04492 5.99999Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.17234 2.92716C3.03734 2.92716 2.9279 3.03661 2.9279 3.17161C2.9279 3.30661 3.03734 3.41605 3.17234 3.41605C3.30734 3.41605 3.41679 3.30661 3.41679 3.17161C3.41679 3.03661 3.30734 2.92716 3.17234 2.92716ZM2.26123 3.17161C2.26123 2.66842 2.66915 2.2605 3.17234 2.2605C3.67553 2.2605 4.08345 2.66842 4.08345 3.17161C4.08345 3.6748 3.67553 4.08272 3.17234 4.08272C2.66915 4.08272 2.26123 3.6748 2.26123 3.17161Z"
        fill={props.color ? props.color : theme.palette.gray.main}
      />
    </SvgIcon>
  );
};

// <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g clip-path="url(#clip0)">
// <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00054 1.4445C5.69372 1.4445 5.44499 1.69323 5.44499 2.00005C5.44499 2.30688 5.69372 2.55561 6.00054 2.55561C6.30737 2.55561 6.5561 2.30688 6.5561 2.00005C6.5561 1.69323 6.30737 1.4445 6.00054 1.4445ZM4.77832 2.00005C4.77832 1.32504 5.32553 0.777832 6.00054 0.777832C6.67556 0.777832 7.22276 1.32504 7.22276 2.00005C7.22276 2.67507 6.67556 3.22228 6.00054 3.22228C5.32553 3.22228 4.77832 2.67507 4.77832 2.00005Z" fill="#0A57E9"/>
// <path fill-rule="evenodd" clip-rule="evenodd" d="M8.82866 2.66056C8.54638 2.66056 8.31755 2.8894 8.31755 3.17167C8.31755 3.45395 8.54638 3.68279 8.82866 3.68279C9.11094 3.68279 9.33977 3.45395 9.33977 3.17167C9.33977 2.8894 9.11094 2.66056 8.82866 2.66056ZM7.65088 3.17167C7.65088 2.52121 8.17819 1.9939 8.82866 1.9939C9.47913 1.9939 10.0064 2.52121 10.0064 3.17167C10.0064 3.82214 9.47913 4.34945 8.82866 4.34945C8.17819 4.34945 7.65088 3.82214 7.65088 3.17167Z" fill="#0A57E9"/>
// <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0005 5.53337C9.74279 5.53337 9.53385 5.7423 9.53385 6.00003C9.53385 6.25777 9.74279 6.4667 10.0005 6.4667C10.2583 6.4667 10.4672 6.25777 10.4672 6.00003C10.4672 5.7423 10.2583 5.53337 10.0005 5.53337ZM8.86719 6.00003C8.86719 5.37411 9.3746 4.8667 10.0005 4.8667C10.6264 4.8667 11.1339 5.37411 11.1339 6.00003C11.1339 6.62596 10.6264 7.13337 10.0005 7.13337C9.3746 7.13337 8.86719 6.62596 8.86719 6.00003Z" fill="#0A57E9"/>
// <path fill-rule="evenodd" clip-rule="evenodd" d="M8.82864 8.40617C8.59545 8.40617 8.40641 8.5952 8.40641 8.82839C8.40641 9.06158 8.59545 9.25061 8.82864 9.25061C9.06182 9.25061 9.25086 9.06158 9.25086 8.82839C9.25086 8.5952 9.06182 8.40617 8.82864 8.40617ZM7.73975 8.82839C7.73975 8.22701 8.22726 7.7395 8.82864 7.7395C9.43001 7.7395 9.91752 8.22701 9.91752 8.82839C9.91752 9.42977 9.43001 9.91728 8.82864 9.91728C8.22726 9.91728 7.73975 9.42977 7.73975 8.82839Z" fill="#0A57E9"/>
// <path fill-rule="evenodd" clip-rule="evenodd" d="M6.0005 9.62223C5.79186 9.62223 5.62272 9.79137 5.62272 10C5.62272 10.2087 5.79186 10.3778 6.0005 10.3778C6.20914 10.3778 6.37828 10.2087 6.37828 10C6.37828 9.79137 6.20914 9.62223 6.0005 9.62223ZM4.95605 10C4.95605 9.42318 5.42367 8.95557 6.0005 8.95557C6.57733 8.95557 7.04494 9.42318 7.04494 10C7.04494 10.5768 6.57733 11.0445 6.0005 11.0445C5.42367 11.0445 4.95605 10.5768 4.95605 10Z" fill="#0A57E9"/>
// <path fill-rule="evenodd" clip-rule="evenodd" d="M3.17188 8.49504C2.98778 8.49504 2.83854 8.64427 2.83854 8.82837C2.83854 9.01246 2.98778 9.1617 3.17188 9.1617C3.35597 9.1617 3.50521 9.01246 3.50521 8.82837C3.50521 8.64427 3.35597 8.49504 3.17188 8.49504ZM2.17188 8.82837C2.17188 8.27608 2.61959 7.82837 3.17188 7.82837C3.72416 7.82837 4.17188 8.27608 4.17188 8.82837C4.17188 9.38065 3.72416 9.82837 3.17188 9.82837C2.61959 9.82837 2.17188 9.38065 2.17188 8.82837Z" fill="#0A57E9"/>
// <path fill-rule="evenodd" clip-rule="evenodd" d="M2.00048 5.7111C1.84093 5.7111 1.71159 5.84044 1.71159 5.99999C1.71159 6.15954 1.84093 6.28888 2.00048 6.28888C2.16003 6.28888 2.28937 6.15954 2.28937 5.99999C2.28937 5.84044 2.16003 5.7111 2.00048 5.7111ZM1.04492 5.99999C1.04492 5.47225 1.47274 5.04443 2.00048 5.04443C2.52822 5.04443 2.95603 5.47225 2.95603 5.99999C2.95603 6.52773 2.52822 6.95554 2.00048 6.95554C1.47274 6.95554 1.04492 6.52773 1.04492 5.99999Z" fill="#0A57E9"/>
// <path fill-rule="evenodd" clip-rule="evenodd" d="M3.17234 2.92716C3.03734 2.92716 2.9279 3.03661 2.9279 3.17161C2.9279 3.30661 3.03734 3.41605 3.17234 3.41605C3.30734 3.41605 3.41679 3.30661 3.41679 3.17161C3.41679 3.03661 3.30734 2.92716 3.17234 2.92716ZM2.26123 3.17161C2.26123 2.66842 2.66915 2.2605 3.17234 2.2605C3.67553 2.2605 4.08345 2.66842 4.08345 3.17161C4.08345 3.6748 3.67553 4.08272 3.17234 4.08272C2.66915 4.08272 2.26123 3.6748 2.26123 3.17161Z" fill="#0A57E9"/>
// </g>
// <defs>
// <clipPath id="clip0">
// <rect width="10.6667" height="10.6667" fill="white" transform="translate(0.666504 0.666748)"/>
// </clipPath>
// </defs>
// </svg>
