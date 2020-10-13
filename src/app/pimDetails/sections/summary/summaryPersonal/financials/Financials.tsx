import React from 'react';
import clsx from 'clsx';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Card, CardContent, CardHeader, Typography, Box } from 'ui/atoms';
import { EuroIcon } from 'ui/atoms/icons';

import { useStyles } from './Financials.styles';
export const Financials = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader title={formatMessage({ id: 'pim_details.summary.personal.financials.title' })} />
      <CardContent>
        <Box>
          <Typography variant="h5" className={classes.detailItemLabel}>
            {formatMessage({ id: 'pim_details.summary.personal.financials.asking_price' })}
          </Typography>
          <Typography variant="h4" className={classes.detailItemValue}>
            25000000 <EuroIcon className={classes.detailItemIcon} />
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" className={classes.detailItem}>
          <Box>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.personal.financials.bottom_selling_price_owner' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              24000000 <EuroIcon className={classes.detailItemIcon} />
            </Typography>
          </Box>
          <Box className={classes.textAlignRight}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              = {formatMessage({ id: 'pim_details.summary.personal.financials.asking' })} -{' '}
              {formatMessage({ id: 'pim_details.summary.personal.financials.bottom' })}
            </Typography>
            <Typography variant="h4" className={clsx(classes.detailItemValue, 'red')}>
              - <EuroIcon color="inherit" className={classes.detailItemIcon} /> 1000000
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" className={classes.detailItem}>
          <Box>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.personal.financials.advice_broker' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              23000000 <EuroIcon className={classes.detailItemIcon} />
            </Typography>
          </Box>
          <Box className={classes.textAlignRight}>
            <Box>
              <Typography variant="h5" className={classes.detailItemLabel}>
                = {formatMessage({ id: 'pim_details.summary.personal.financials.bottom' })} -{' '}
                {formatMessage({ id: 'pim_details.summary.personal.financials.advice' })}
              </Typography>
              <Typography variant="h4" className={clsx(classes.detailItemValue, 'red')}>
                - <EuroIcon color="inherit" className={classes.detailItemIcon} /> 2000000
              </Typography>
            </Box>
            <Box className={classes.marginTopTwo}>
              <Typography variant="h5" className={classes.detailItemLabel}>
                = {formatMessage({ id: 'pim_details.summary.personal.financials.advice' })} -{' '}
                {formatMessage({ id: 'pim_details.summary.personal.financials.bottom' })}
              </Typography>
              <Typography variant="h4" className={clsx(classes.detailItemValue, 'red')}>
                - <EuroIcon color="inherit" className={classes.detailItemIcon} /> 1000000
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.detailItem}>
          <Box>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.personal.financials.mortgage' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              20000000 <EuroIcon className={classes.detailItemIcon} />
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" className={classes.detailItem}>
          <Box>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.personal.financials.residual_debt_mortgage' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              14000000 <EuroIcon className={classes.detailItemIcon} />
            </Typography>
          </Box>
          <Box className={classes.textAlignRight}>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.personal.financials.difference' })}
            </Typography>
            <Typography variant="h4" className={clsx(classes.detailItemValue, 'green')}>
              <EuroIcon color="inherit" className={classes.detailItemIcon} /> 6000000
            </Typography>
          </Box>
        </Box>
        <Box className={classes.detailItem}>
          <Box>
            <Typography variant="h5" className={classes.detailItemLabel}>
              {formatMessage({ id: 'pim_details.summary.personal.financials.national_mortgage_guarantee' })}
            </Typography>
            <Typography variant="h4" className={classes.detailItemValue}>
              Yes
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
