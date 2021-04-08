import React from 'react';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks';
import { Box, Button, Chip, Grid, PersonChip, Typography } from 'ui/atoms';
import { ListOptionsMenu } from 'ui/molecules';
import { InvoiceStepper } from '../invoiceStepper/InvoiceStepper';

import { InvoiceItemProps, InvoiceItemStatus } from './InvoiceItem.types';
import { useStyles } from './InvoiceItem.styles';

export const InvoiceItem = ({
  item: {
    owners,
    steps,
    details: { invoiceNumber, invoiceDate, invoiceDueDate, invoiceType, amount, tax, total, address },
    status,
  },
}: InvoiceItemProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles({ inactive: status === InvoiceItemStatus.ActionRequired });

  return (
    <Box p={2} className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          {owners.map((owner, index) => (
            <Box mb={1}>
              <PersonChip
                key={index}
                avatarVariant="square"
                name={`${owner.firstName} ${owner.lastName}`}
                image={owner.image?.url || ''}
              />
            </Box>
          ))}
        </Grid>
        <Grid item xs={9}>
          <InvoiceStepper steps={steps} />
        </Grid>
        <Grid item xs={1}>
          <ListOptionsMenu />
        </Grid>
      </Grid>
      <Box mt={6} />
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Button variant="contained" color="secondary">
            {formatMessage({ id: 'dms.invoice.declined' })}
          </Button>
          <Box mt={1} />
          <Button variant="contained" color="inherit" className={classes.btnSuccess}>
            {formatMessage({ id: 'dms.invoice.declined' })}
          </Button>
        </Grid>
        <Grid item xs={10}>
          <Box>
            <Grid container>
              <Grid item xs={6}>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="h6" color="textSecondary">
                      {formatMessage({ id: 'dms.invoice.invoice_number' })}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" color="textSecondary" className={classes.fontWeightBold}>
                      {invoiceNumber ?? '-'}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="h6" color="textSecondary">
                      {formatMessage({ id: 'dms.invoice.invoice_date' })}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" color="textSecondary" className={classes.fontWeightBold}>
                      {invoiceDate ? DateTime.fromISO(invoiceDate).toLocaleString(DateTime.DATE_SHORT) : '-'}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="h6" color="textSecondary">
                      {formatMessage({ id: 'dms.invoice.invoice_due_date' })}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" color="textSecondary" className={classes.fontWeightBold}>
                      {invoiceDueDate ? DateTime.fromISO(invoiceDueDate).toLocaleString(DateTime.DATE_SHORT) : '-'}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="h6" color="textSecondary">
                      {formatMessage({ id: 'dms.invoice.invoice_type' })}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" color="textSecondary" className={classes.fontWeightBold}>
                      {invoiceType ?? '-'}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="h6" color="textSecondary">
                      {formatMessage({ id: 'dms.invoice.amount' })}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" color="textSecondary" className={classes.fontWeightBold}>
                      {amount ? `€ ${amount}` : '-'}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="h6" color="textSecondary">
                      {formatMessage({ id: 'dms.invoice.tax' })}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" color="textSecondary" className={classes.fontWeightBold}>
                      {tax ? `€ ${tax}` : '-'}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant="h6" color="textSecondary">
                      {formatMessage({ id: 'dms.invoice.total_incl_tax' })}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h4" color="textSecondary" className={classes.fontWeightBold}>
                      {total ? `€ ${total}` : '-'}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box mt={3} display="flex">
            <Chip variant="outlined" size="small" label={formatMessage({ id: `dms.invoice.label.for_sale` })} />
            <Box ml={6} />
            <Typography variant="h5" className={classes.fontWeightBold}>
              {address ?? '-'}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
