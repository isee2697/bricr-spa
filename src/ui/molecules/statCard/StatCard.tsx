import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { FormattedNumber } from 'react-intl';

import { Card, CardContent, Typography } from 'ui/atoms';
import { ArrowUpIcon } from 'ui/atoms/icons/arrowUp/ArrowUpIcon';
import { ArrowRightIcon } from 'ui/atoms/icons/arrowRight/ArrowRightIcon';
import { ArrowDownIcon } from 'ui/atoms/icons/arrowDown/ArrowDownIcon';

import { StatCardProps, StatCardVariant } from './StatCard.types';
import { useStyles } from './StatCard.styles';

const statIcon: { [key in StatCardVariant]: ReactNode } = {
  info: null,
  success: <ArrowUpIcon color="inherit" />,
  warning: <ArrowRightIcon color="inherit" />,
  error: <ArrowDownIcon color="inherit" />,
};

export const StatCard = ({ children, value, endAdornment, variant = 'info' }: StatCardProps) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent className={classes.content}>
        <Typography variant="h6" className={classes.title}>
          {children}
        </Typography>
        <div
          className={classNames(classes.value, {
            [classes.success]: variant === 'success',
            [classes.warning]: variant === 'warning',
            [classes.error]: variant === 'error',
          })}
        >
          <Typography variant="h3">
            <FormattedNumber value={value} />
            {endAdornment}
          </Typography>
          {statIcon[variant]}
        </div>
      </CardContent>
    </Card>
  );
};
