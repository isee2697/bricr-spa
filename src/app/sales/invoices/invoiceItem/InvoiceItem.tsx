import React from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';

import { Avatar, Box, Chip, Emoji, Grid, IconButton, PersonChip, Typography } from 'ui/atoms';
import { MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { InvoicesStatus } from 'app/crmRelationsDetails/sales/invoices/Invoices.types';

import { InvoiceItemProps } from './InvoiceItem.types';
import { useStyles } from './InvoiceItem.styles';

export const InvoiceItem = ({
  item: { image, number, date, dueDate, type, amount, tax, interest, address, linkedObjects = [], status },
  checkbox,
  checked,
}: InvoiceItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      <Box className={clsx(classes.row, { [classes.rowChecked]: checked })}>
        {checkbox}
        <Box width="100%" display="flex" alignItems="flex-start" className={classes.rowItem}>
          <Box mr={3}>
            <Avatar variant="square" src={image || ''} className={clsx(classes.image, status)}>
              {(!image || image === '') && <Emoji>{'📷'}</Emoji>}
            </Avatar>
          </Box>
          <Box width="100%">
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Box>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="h6" color="textSecondary">
                        {formatMessage({ id: 'sales.invoices.invoice.invoice_number' })}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" color="textSecondary" className={classes.fontWeightBolder}>
                        {number ? `INV-${number}` : '-'}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="h6" color="textSecondary">
                        {formatMessage({ id: 'sales.invoices.invoice.invoice_date' })}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" color="textSecondary" className={classes.fontWeightBolder}>
                        {date ? date.toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS) : '-'}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="h6" color="textSecondary">
                        {formatMessage({ id: 'sales.invoices.invoice.invoice_due_date' })}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        variant="h6"
                        color={status === InvoicesStatus.Overdue ? 'error' : 'textSecondary'}
                        className={classes.fontWeightBolder}
                      >
                        {dueDate ? dueDate.toLocaleString(DateTime.DATE_SHORT) : '-'}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="h6" color="textSecondary">
                        {formatMessage({ id: 'sales.invoices.invoice.invoice_type' })}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" color="textSecondary" className={classes.fontWeightBolder}>
                        {formatMessage({ id: `dictionaries.sales.invoice_type.${type}` })}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="h6" color="textSecondary">
                        {formatMessage({ id: 'sales.invoices.invoice.amount' })}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" color="textSecondary" className={classes.fontWeightBolder}>
                        € {amount}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="h6" color="textSecondary">
                        {formatMessage({ id: 'sales.invoices.invoice.tax' })}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" color="textSecondary" className={classes.fontWeightBolder}>
                        € {tax}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="h6" color="textSecondary">
                        {formatMessage({ id: 'sales.invoices.invoice.total_incl_tax' })}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        variant="h4"
                        color={status === InvoicesStatus.Overdue ? 'error' : 'textSecondary'}
                        className={classes.fontWeightBolder}
                      >
                        € {amount + tax}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box>
                  {linkedObjects.map(object => (
                    <Box mb={1}>
                      <PersonChip name={object.name} image={object.image} />
                    </Box>
                  ))}
                </Box>
                <Box mt={2.5}>
                  <Chip
                    variant="outlined"
                    size="small"
                    label={formatMessage({ id: `dictionaries.sales.interests.${interest}` })}
                    className={classes.chip}
                  />
                </Box>
                <Box mt={1}>
                  <Typography variant="h5" className={classes.fontWeightBold}>
                    {address}
                  </Typography>
                </Box>
                {dueDate &&
                  (status === InvoicesStatus.Approved ||
                    status === InvoicesStatus.Rejected ||
                    status === InvoicesStatus.Overdue ||
                    status === InvoicesStatus.Paid) && (
                    <Box mt={1}>
                      <Chip
                        variant="default"
                        size="medium"
                        label={
                          status === InvoicesStatus.Overdue
                            ? formatMessage({ id: 'common.days' }, { days: Math.floor(dueDate.diffNow('days').days) })
                            : dueDate.toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)
                        }
                        className={clsx(classes.statusChangedDateChip, status)}
                      />
                    </Box>
                  )}
              </Grid>
            </Grid>
          </Box>
          <IconButton variant="rounded" size="small">
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};
