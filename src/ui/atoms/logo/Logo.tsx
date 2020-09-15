import React from 'react';

import logoImage from 'ui/atoms/icons/svg/logo.svg';

import { LogoProps } from './Logo.types';

export const Logo = (props: LogoProps) => <img src={logoImage} alt={props.alt || 'Bricr'} {...props} />;
