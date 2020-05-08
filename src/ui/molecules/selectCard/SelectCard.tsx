import React from 'react';
import classNames from 'classnames';

import { Card, Button } from 'ui/atoms';
import { AppMessages } from 'i18n/messages';
import { useLocale } from 'hooks/useLocale/useLocale';

import { SelectCardProps } from './SelectCard.types';
import { useStyles } from './SelectCard.styles';

export const SelectCard = ({
  children,
  className,
  fullWidth,
  centered,
  selected,
  withButton,
  ...props
}: SelectCardProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card
      {...props}
      className={classNames(
        classes.root,
        className,
        !!fullWidth ? classes.fullWidth : classes.regular,
        !!centered ? classes.centered : '',
        !!selected ? classes.selected : '',
      )}
      data-testid="select-card"
    >
      {children}
      {!!withButton && (
        <Button color="primary" variant={selected ? 'outlined' : 'contained'}>
          {selected
            ? formatMessage({ id: AppMessages['select_card.unselect'] })
            : formatMessage({ id: AppMessages['select_card.select'] })}
        </Button>
      )}
    </Card>
  );
};
