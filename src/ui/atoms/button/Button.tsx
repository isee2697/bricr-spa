import React from 'react';
import classNames from 'classnames';

import { ButtonProps } from './Button.types';
import * as S from './Button.styles';
import { useStyles } from './Button.styles';

export const Button = ({ color, ...props }: ButtonProps) => {
  const classes = useStyles();

  return (
    <S.Button
      color={color === 'ghost' ? 'inherit' : color}
      className={classNames({ [classes.ghost]: color === 'ghost' })}
      {...props}
    />
  );
};
