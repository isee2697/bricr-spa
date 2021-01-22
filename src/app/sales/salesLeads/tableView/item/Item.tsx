import React from 'react';
import clsx from 'classnames';

import { IconButton, TableRow, TableCell } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';

import { QuotationItemProps } from './Item.types';
import { useStyles } from './Item.styles';

export const SalesLeadItem = ({ item: { name }, checkbox, checked }: QuotationItemProps) => {
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
