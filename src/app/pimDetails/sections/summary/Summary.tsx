import React from 'react';
import clsx from 'classnames';
import useTheme from '@material-ui/core/styles/useTheme';

import { PimDetailsHeader } from '../../pimDetailsHeader/PimDetailsHeader';
import { Button, Grid, Typography, Box, Badge } from 'ui/atoms';
import { BuildingIcon, ShareIcon, SeeIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Page } from 'ui/templates';

import { SummaryProps } from './Summary.types';
import { useStyles } from './Summary.styles';
import { Pricing } from './pricing/Pricing';
import { Specifications } from './specifications/Specifications';
import { Tanks } from './tanks/Tanks';
import { Pollution } from './pollution/Pollution';
import { Maintenance } from './maintenance/Maintenance';
import { Numbers } from './numbers/Numbers';
import { Costs } from './costs/Costs';
import { Inspection } from './inspection/Inspection';

export const Summary = ({ summary, isSidebarVisible, onSidebarOpen }: SummaryProps) => {
  const { address } = summary;
  const classes = useStyles(summary);
  const { formatMessage } = useLocale();
  const theme = useTheme();

  return (
    <>
      <PimDetailsHeader
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        action={
          <Button
            color="primary"
            startIcon={<ShareIcon style={{ fontSize: theme.spacing(3) }} />}
            variant="contained"
            size="small"
          >
            {formatMessage({ id: 'pim_details.summary.share_summary' })}
          </Button>
        }
      />
      <Page withoutHeader classes={{ container: classes.summaryContainer }}>
        <Grid xs={12} item className={classes.summaryContent}>
          <Typography variant="h1" className={classes.fontWeightBold}>
            {formatMessage({ id: 'pim_details.summary.title' })}
          </Typography>
          <Typography variant="h1" className={clsx(classes.marginTopTwo, classes.fontWeightMedium)}>
            <BuildingIcon className={classes.addressIcon} color="error" /> {address}
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="space-between" className={classes.summaryHeader}>
            <Badge badgeContent={2} color="error" classes={{ badge: classes.importantBrokerBadge }}>
              <Typography variant="h2">{formatMessage({ id: 'pim_details.summary.important_broker' })}</Typography>
            </Badge>
            <SeeIcon />
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Pricing pricing={summary.pricing} />
              <Specifications />
              <Tanks />
              <Pollution />
              <Maintenance />
            </Grid>
            <Grid item xs={6}>
              <Numbers />
              <Costs />
              <Inspection />
            </Grid>
          </Grid>
        </Grid>
      </Page>
    </>
  );
};
