import React from 'react';
import classNames from 'classnames';

import { ButtonProps } from './Button.types';
import * as S from './Button.styles';
import { useStyles } from './Button.styles';

export const Button = ({ color, variant, ...props }: ButtonProps) => {
  const classes = useStyles({ variant });

  return (
    <S.Button
      color={color === 'ghost' ? 'inherit' : color}
      className={classNames({ [classes.ghost]: color === 'ghost' })}
      variant={variant}
      {...props}
    />
  );
};
