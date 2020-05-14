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
  disabled,
  onClick,
  adornment,
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
        !!centered ? classes.centered : '',
        !!selected ? classes.selected : '',
        !!disabled ? classes.disabled : '',
      )}
      data-testid="select-card"
      onClick={disabled ? undefined : onClick}
    >
      {children}
      {!!withButton && (
        <Button color="primary" disabled={disabled} size="small" variant={selected ? 'outlined' : 'contained'}>
          {selected
            ? formatMessage({ id: AppMessages['select_card.unselect'] })
            : formatMessage({ id: AppMessages['select_card.select'] })}
        </Button>
      )}

      {adornment && (
        <div onClick={e => e.stopPropagation()} className={classes.adornment}>
          {adornment(!!selected)}
        </div>
      )}
    </Card>
  );
};
