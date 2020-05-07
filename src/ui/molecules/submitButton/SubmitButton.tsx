import React from 'react';
import classNames from 'classnames';

import { Button, CircularProgress } from 'ui/atoms';

import { SubmitButtonProps } from './SubmitButton.types';
import { useStyles } from './SubmitButton.styles';

export const SubmitButton = ({ isLoading, children, disabled, spinnerColor, ...props }: SubmitButtonProps) => {
  const classes = useStyles();

  return (
    <Button
      className={classNames(isLoading && [classes.isLoading], classes.root)}
      disabled={isLoading ? true : disabled}
      {...props}
    >
      {isLoading && (
        <div className="spinner">
          <CircularProgress color={spinnerColor} />
        </div>
      )}
      <div className="label">{children}</div>
    </Button>
  );
};
