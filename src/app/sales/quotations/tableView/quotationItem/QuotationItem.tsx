import React from 'react';
import clsx from 'classnames';

import { IconButton, TableRow, TableCell } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';

import { QuotationItemProps } from './QuotationItem.types';
import { useStyles } from './QuotationItem.styles';

export const QuotationItem = ({ item: { id, address, version }, checkbox, checked }: QuotationItemProps) => {
  const classes = useStyles();

  return (
    <TableRow className={clsx(checked && classes.rowChecked)}>
      <TableCell padding="checkbox">{checkbox}</TableCell>
      <TableCell>{`QA-${id}`}</TableCell>
      <TableCell>{version}</TableCell>
      <TableCell>{address}</TableCell>
      <TableCell padding="none">
        <IconButton variant="rounded" size="small">
          <MenuIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
