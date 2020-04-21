import * as React from 'react';
import { ButtonProps as DefaultButtonProps } from '@material-ui/core/Button';

import * as S from './Button.styles';

export type ButtonProps = DefaultButtonProps;

export const Button = (props: ButtonProps) => <S.Button {...props} />;
