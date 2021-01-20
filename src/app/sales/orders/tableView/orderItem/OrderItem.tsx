import React from 'react';
import clsx from 'classnames';

import { IconButton, TableRow, TableCell } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';

import { OrderItemProps } from './OrderItem.types';
import { useStyles } from './OrderItem.styles';

export const OrderItem = ({ item: { id, name }, checkbox, checked }: OrderItemProps) => {
  const classes = useStyles();

  return (
    <TableRow className={clsx(checked && classes.rowChecked)}>
      <TableCell padding="checkbox">{checkbox}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell padding="none">
        <IconButton variant="rounded" size="small">
          <MenuIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
