import React from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';

import { Avatar, Box, Chip, Emoji, Grid, IconButton, Typography } from 'ui/atoms';
import { EuroIcon, MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { ListItemProps } from './ListItem.types';
import { useStyles } from './ListItem.styles';

export const ListItem = ({
  item: { image, number, date, dueDate, type, amount, tax, interest, address },
  checkbox,
  checked,
}: ListItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      <Box className={clsx(classes.row, { [classes.rowChecked]: checked })}>
        {checkbox}
        <Box width="100%" display="flex" alignItems="flex-start" className={classes.rowItem}>
          <Box mr={3}>
            <Avatar variant="square" src={image || ''} className={classes.image}>
              {(!image || image === '') && <Emoji>{'📷'}</Emoji>}
            </Avatar>
          </Box>
          <Box width="100%">
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Box>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        {formatMessage({ id: 'crm.details.sales.invoices.invoice.invoice_number' })}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" className={classes.fontWeightBolder}>
                        {number && number > 0 ? number : '-'}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        {formatMessage({ id: 'crm.details.sales.invoices.invoice.invoice_date' })}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" className={classes.fontWeightBolder}>
                        {date ? date.toLocaleString(DateTime.DATE_SHORT) : '-'}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        {formatMessage({ id: 'crm.details.sales.invoices.invoice.invoice_due_date' })}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" className={classes.fontWeightBolder}>
                        {dueDate ? dueDate.toLocaleString(DateTime.DATE_SHORT) : '-'}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        {formatMessage({ id: 'crm.details.sales.invoices.invoice.invoice_type' })}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" className={classes.fontWeightBolder}>
                        {formatMessage({ id: `dictionaries.sales.invoice_type.${type}` })}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        {formatMessage({ id: 'crm.details.sales.invoices.invoice.amount' })}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" className={classes.fontWeightBolder}>
                        <EuroIcon /> {amount}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        {formatMessage({ id: 'crm.details.sales.invoices.invoice.tax' })}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" className={classes.fontWeightBolder}>
                        <EuroIcon /> {tax}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        {formatMessage({ id: 'crm.details.sales.invoices.invoice.total_incl_tax' })}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6" className={classes.fontWeightBolder}>
                        <EuroIcon /> {amount + tax}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box mt={10}>
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
