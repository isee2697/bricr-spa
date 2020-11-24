import React from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

import { Tooltip, IconButton } from 'ui/atoms';
import { ExitIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { ExitButtonProps } from './ExitButton.types';
import { useStyles } from './ExitButton.styles';

export const ExitButton = ({ to, ...props }: ExitButtonProps) => {
  const { push, goBack } = useHistory();
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Tooltip title={formatMessage({ id: 'common.exit.title' })}>
      <IconButton
        className={classNames(classes.root, props.className)}
        onClick={() => (to ? push(to) : goBack())}
        aria-label="back"
      >
        <ExitIcon {...props} />
      </IconButton>
    </Tooltip>
  );
};
