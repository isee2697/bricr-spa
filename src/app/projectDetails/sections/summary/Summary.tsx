import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { useEntityType } from 'app/shared/entityType';
import { Badge, Box, Grid, IconButton, NavBreadcrumb, Typography, Paper } from 'ui/atoms';
import { useLocale } from 'hooks';
import { ProjectDetailsHeader } from '../../projectDetailsHeader/ProjectDetailsHeader';
import { ManageIcon, SeeIcon, UnseeIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';

import { SummaryProps } from './Summary.types';
import { useStyles } from './Summary.styles';
import { Pricing } from './pricing/Pricing';
import { Costs } from './costs/Costs';
import { Specifications } from './specifications/Specifications';
import { Project } from './project/Project';
import { Objecttypes } from './objecttypes/Objecttypes';
import { Energy } from './energy/Energy';

export const Summary = ({ isSidebarVisible, onSidebarOpen, summary }: SummaryProps) => {
  const [isShowImportantBrokerContent, setIsShowImportantBrokerContent] = useState(false);
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const classes = useStyles(summary);

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'project_details.summary.title' })} urlBase={baseUrl} to="/summary" />
      <>
        <ProjectDetailsHeader onSidebarOpen={onSidebarOpen} isSidebarVisible={isSidebarVisible} />
        <Page withoutHeader classes={{ container: classes.summaryContainer }}>
          <Grid xs={12} item className={classes.summaryContent}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h1" className={classes.fontWeightBold}>
                {formatMessage({ id: 'project_details.summary.title' })}
              </Typography>
              <Box display="flex" alignItems="center">
                <Typography variant="h5" className={classes.fontWeightMedium}>
                  {DateTime.local().toLocaleString(DateTime.DATE_MED)}
                </Typography>
                <IconButton size="small" variant="rounded" className={classes.menuIcon}>
                  <ManageIcon color="inherit" />
                </IconButton>
              </Box>
            </Box>
            <Paper className={classes.summaryHeaderLabel}>
              <Box className={classes.bubble}>De Wateringen</Box>
            </Paper>
            <Box className={classes.summaryHeader}>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Badge badgeContent={2} color="error" classes={{ badge: classes.importantBrokerBadge }}>
                  <Typography variant="h2">{formatMessage({ id: 'pim_details.summary.important_broker' })}</Typography>
                </Badge>
                <IconButton
                  variant="roundedContained"
                  onClick={() => setIsShowImportantBrokerContent(!isShowImportantBrokerContent)}
                >
                  {isShowImportantBrokerContent && <UnseeIcon />}
                  {!isShowImportantBrokerContent && <SeeIcon />}
                </IconButton>
              </Box>
              {isShowImportantBrokerContent && (
                <Grid container spacing={1} className={classes.summaryHeaderDescription}></Grid>
              )}
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Pricing />
                <Costs />
                <Specifications />
              </Grid>
              <Grid item xs={6}>
                <Project />
                <Objecttypes />
                <Energy />
              </Grid>
            </Grid>
          </Grid>
        </Page>
      </>
    </>
  );
};
