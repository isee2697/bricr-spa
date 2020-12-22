import React from 'react';
import clsx from 'classnames';

import { useLocale } from 'hooks';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Checkbox,
  IconButton,
} from 'ui/atoms';
import { BuildingIcon, ClockIcon, TasksIcon, UserIcon, AddIcon } from 'ui/atoms/icons';

import { useStyles } from './RulesList.styles';
import { InvoiceRule } from './RulesList.types';

export const RulesList = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const headCells = [
    {
      id: 'product',
      disablePadding: true,
      label: formatMessage({ id: 'sales.invoice.invoice_rules.product' }),
      icon: TasksIcon,
    },
    {
      id: 'description',
      disablePadding: true,
      label: formatMessage({ id: 'sales.invoice.invoice_rules.description' }),
      icon: UserIcon,
    },
    {
      id: 'price',
      disablePadding: true,
      label: formatMessage({ id: 'sales.invoice.invoice_rules.price' }),
      icon: BuildingIcon,
    },
    {
      id: 'quantity',
      disablePadding: true,
      label: formatMessage({ id: 'sales.invoice.invoice_rules.quantity' }),
      icon: BuildingIcon,
    },
    {
      id: 'vatPercentage',
      disablePadding: true,
      label: formatMessage({ id: 'sales.invoice.invoice_rules.vat_percentage' }),
      icon: ClockIcon,
    },
    {
      id: 'vatPrice',
      disablePadding: true,
      label: formatMessage({ id: 'sales.invoice.invoice_rules.vat_price' }),
      icon: ClockIcon,
    },
    {
      id: 'exVatPrice',
      disablePadding: true,
      label: formatMessage({ id: 'sales.invoice.invoice_rules.ex_vat_price' }),
      icon: UserIcon,
    },
    {
      id: 'totalPrice',
      disablePadding: true,
      label: formatMessage({ id: 'sales.invoice.invoice_rules.total_price' }),
      icon: UserIcon,
    },
  ];

  const rules: InvoiceRule[] = [
    {
      id: '0001',
      product: 'One-time start-up costs',
      description: 'Description',
      price: 305,
      quantity: 1,
      vatPercentage: 21,
      vatPrice: 125,
      exVatPrice: 350,
      totalPrice: 475,
    },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="textSecondary">
          {formatMessage({ id: 'sales.invoice.invoice_rules.title' })}
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              {headCells.map((headCell, index) => (
                <TableCell key={index} className={classes.columnHeader}>
                  <Box display="flex" alignItems="center">
                    {headCell.icon && (
                      <headCell.icon
                        color="action"
                        className={clsx(classes.columnHeaderIcon, classes.inlineBlock, classes.marginRightOne)}
                      />
                    )}
                    <Typography variant="h5" className={clsx(classes.inlineBlock, classes.marginRightOne)}>
                      {headCell.label}
                    </Typography>
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rules.map((rule, index) => (
              <TableRow key={index} className={classes.row}>
                <TableCell padding="checkbox">
                  <Checkbox checked={false} inputProps={{ 'aria-labelledby': `sales-invoice-rule-${rule.id}` }} />
                </TableCell>
                <TableCell>{rule.product}</TableCell>
                <TableCell>{rule.description}</TableCell>
                <TableCell>€ {rule.price}</TableCell>
                <TableCell>{rule.quantity}</TableCell>
                <TableCell>{rule.vatPercentage}</TableCell>
                <TableCell>€ {rule.vatPrice}</TableCell>
                <TableCell>€ {rule.exVatPrice}</TableCell>
                <TableCell>€ {rule.totalPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box mt={1}>
          <IconButton size="small" variant="circleContained" color="primary">
            <AddIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};
