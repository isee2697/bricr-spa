import React from 'react';
import clsx from 'classnames';

import { PimDetailsHeader } from 'app/pimDetails/pimDetailsHeader/PimDetailsHeader';
import { Page } from 'ui/templates';
import { Grid, Typography, Box } from 'ui/atoms';
import { BuildingIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { AuditChecklistProps } from './AuditChecklist.types';
import { useStyles } from './AuditChecklist.styles';
import { Pricing } from './pricing/Pricing';
import { Costs } from './costs/Costs';
import { Documents } from './documents/Documents';
import { Tenant } from './tenant/Tenant';

export const AuditChecklist = ({ summary, isSidebarVisible, onSidebarOpen }: AuditChecklistProps) => {
  const classes = useStyles(summary);
  const { formatMessage } = useLocale();
  const { address } = summary;

  return (
    <>
      <PimDetailsHeader isSidebarVisible={isSidebarVisible} onSidebarOpen={onSidebarOpen} />
      <Page withoutHeader classes={{ container: classes.summaryContainer }}>
        <Grid xs={12} item className={classes.summaryContent}>
          <Box display="flex" alignItems="cetner" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <Typography variant="h1" className={classes.fontWeightBold}>
                {formatMessage({ id: 'pim_details.summary.audit_checklist.title' })}
              </Typography>
              <Typography variant="h1" className={clsx(classes.marginTopTwo, classes.fontWeightMedium)}>
                <BuildingIcon className={classes.addressIcon} color="error" /> {address}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" color="textSecondary">
                {formatMessage({ id: 'pim_details.summary.audit_checklist.owner' })}
              </Typography>
              <Typography variant="h5">{'Altera Vastgoed BV'}</Typography>
            </Box>
          </Box>
          <Box mt={3}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Pricing summary={summary} />
              </Grid>
              <Grid item xs={6}>
                <Costs summary={summary} />
              </Grid>
            </Grid>
          </Box>
          <Box mt={3}>
            <Documents />
          </Box>
          <Box mt={4}>
            <Tenant />
          </Box>
        </Grid>
      </Page>
    </>
  );
};
