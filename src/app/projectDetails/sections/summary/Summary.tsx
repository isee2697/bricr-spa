import useTheme from '@material-ui/core/styles/useTheme';
import React, { useState } from 'react';
import clsx from 'classnames';

import { Badge, Box, Button, Grid, IconButton, NavBreadcrumb, Typography } from '../../../../ui/atoms';
import { useLocale } from '../../../../hooks';
import { useEntityType } from '../../../shared/entityType';
import { ProjectDetailsHeader } from '../../projectDetailsHeader/ProjectDetailsHeader';
import { BuildingIcon, MenuIcon, SeeIcon, ShareIcon, UnseeIcon } from '../../../../ui/atoms/icons';
import { Page } from '../../../../ui/templates';

import { SummaryProps } from './Summary.types';
import { useStyles } from './Summary.styles';

export const Summary = ({ isSidebarVisible, onSidebarOpen, summary }: SummaryProps) => {
  const [isShowImportantBrokerContent, setIsShowImportantBrokerContent] = useState(false);
  const { formatMessage } = useLocale();
  const { baseUrl } = useEntityType();
  const theme = useTheme();
  const classes = useStyles(summary);

  return (
    <>
      <NavBreadcrumb title={formatMessage({ id: 'project_details.summary.title' })} urlBase={baseUrl} to="/summary" />
      <>
        <ProjectDetailsHeader
          onSidebarOpen={onSidebarOpen}
          isSidebarVisible={isSidebarVisible}
          action={
            <Button
              color="primary"
              startIcon={<ShareIcon style={{ fontSize: theme.spacing(3) }} />}
              variant="contained"
              size="small"
            >
              {formatMessage({ id: 'project_details.summary.share_summary' })}
            </Button>
          }
        />
        <Page withoutHeader classes={{ container: classes.summaryContainer }}>
          <Grid xs={12} item className={classes.summaryContent}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h1" className={classes.fontWeightBold}>
                {formatMessage({ id: 'project_details.summary.title' })}
              </Typography>
              <Box display="flex" alignItems="center">
                <Typography variant="h5" className={classes.fontWeightMedium}>
                  Thursday, 7 November, 2019
                </Typography>
                <IconButton size="small" variant="rounded" className={classes.menuIcon}>
                  <MenuIcon color="inherit" />
                </IconButton>
              </Box>
            </Box>
            <Box display="flex" justifyContent="flex-end">
              De Wateringen
            </Box>
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
          </Grid>
        </Page>
      </>
    </>
  );
};
