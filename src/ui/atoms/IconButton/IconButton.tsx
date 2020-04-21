import * as React from 'react';
import { IconButtonProps as DefaultIconButtonProps } from '@material-ui/core';

import * as S from './IconButton.styles';

export type IconButtonProps = DefaultIconButtonProps;

export const IconButton = (props: IconButtonProps) => <S.IconButton {...props} />;
