import React from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';

import { IconButton, TableRow, TableCell } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';

import { InvoiceItemProps } from './InvoiceItem.types';
import { useStyles } from './InvoiceItem.styles';

export const InvoiceItem = ({
  item: { id, image, number, date, dueDate, type, amount, tax, interest, address, linkedObjects = [], status },
  checkbox,
  checked,
}: InvoiceItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const { push } = useHistory();

  return (
    <TableRow className={clsx(checked && classes.rowChecked)}>
      <TableCell padding="checkbox">{checkbox}</TableCell>
      <TableCell>{number ? `INV-${number}` : '-'}</TableCell>
      <TableCell>{date ? date.toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS) : '-'}</TableCell>
      <TableCell>{dueDate ? dueDate.toLocaleString(DateTime.DATE_SHORT) : '-'}</TableCell>
      <TableCell>{formatMessage({ id: `dictionaries.sales.invoice_type.${type}` })}</TableCell>
      <TableCell>€ {amount}</TableCell>
      <TableCell>€ {tax}</TableCell>
      <TableCell>€ {amount + tax}</TableCell>
      <TableCell padding="none">
        <IconButton
          variant="rounded"
          size="small"
          onClick={() => push(AppRoute.salesInvoiceDetails.replace(':id', id))}
        >
          <MenuIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};
