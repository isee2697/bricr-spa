import React from 'react';

import { useLocale } from 'hooks';
import { Card, CardContent, Typography, Table, TableBody, TableRow, TableHead, TableCell } from 'ui/atoms';

import { useStyles } from './TaxBreakdown.styles';
import { Breakdown } from './TaxBreakdown.types';

export const TaxBreakdown = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const headCells = [
    {
      id: 'taxPercentage',
      disablePadding: true,
      label: formatMessage({ id: 'sales.invoice.tax_breakdown.tax_percentage' }),
    },
    {
      id: 'overPrice',
      disablePadding: true,
      label: formatMessage({ id: 'sales.invoice.tax_breakdown.over_price' }),
    },
    {
      id: 'taxPrice',
      disablePadding: true,
      label: formatMessage({ id: 'sales.invoice.tax_breakdown.tax_price' }),
    },
  ];

  const breakdowns: Breakdown[] = [
    {
      id: '0001',
      taxPercentage: 14,
      overPrice: 2637,
      taxPrice: 39512,
    },
    {
      id: '0001',
      taxPercentage: 14,
      overPrice: 2637,
      taxPrice: 39512,
    },
    {
      id: '0001',
      taxPercentage: 14,
      overPrice: 2637,
      taxPrice: 39512,
    },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="textSecondary">
          {formatMessage({ id: 'sales.invoice.tax_breakdown.title' })}
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              {headCells.map((headCell, index) => (
                <TableCell key={index} className={classes.columnHeader}>
                  <Typography variant="h5">{headCell.label}</Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {breakdowns.map((breakdown, index) => (
              <TableRow key={index} className={classes.row}>
                <TableCell>{breakdown.taxPercentage}</TableCell>
                <TableCell>€ {breakdown.overPrice}</TableCell>
                <TableCell>€ {breakdown.taxPrice}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
