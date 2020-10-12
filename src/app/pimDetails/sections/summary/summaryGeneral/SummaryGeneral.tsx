import useTheme from '@material-ui/core/styles/useTheme';

import React, { useState } from 'react';
import clsx from 'classnames';
import { Badge, Box, Button, Grid, IconButton, Typography } from 'ui/atoms';
import { BuildingIcon, SeeIcon, ShareIcon, UnseeIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { PimDetailsHeader } from '../../../pimDetailsHeader/PimDetailsHeader';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './SummaryGeneral.styles';
import { Pricing } from './pricing/Pricing';
import { Tanks } from './tanks/Tanks';
import { Pollution } from './pollution/Pollution';
import { Maintenance } from './maintenance/Maintenance';
import { Numbers } from './numbers/Numbers';
import { Costs } from './costs/Costs';
import { Inspection } from './inspection/Inspection';
import { Specifications } from './specifications/Specifications';
import { SummaryGeneralProps } from './SummaryGeneral.types';

export const SummaryGeneral = ({ summary, isSidebarVisible, onSidebarOpen }: SummaryGeneralProps) => {
  const [isShowImportantBrokerContent, setIsShowImportantBrokerContent] = useState(false);
  const { formatMessage } = useLocale();
  const { address } = summary;
  const classes = useStyles(summary);
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
              <Grid container spacing={1} className={classes.summaryHeaderDescription}>
                <Grid item xs={6}>
                  <Box className={classes.importantBrokerItem}>
                    <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
                      {formatMessage({ id: 'pim_details.summary.important_broker.house' })}
                    </Typography>
                    <Typography variant="h4" className={classes.importantBrokerValue}>
                      Proin rhoncus neque vel ligula pellentesque elementum. Integer volutpat purus vitae mi lobortis.
                    </Typography>
                  </Box>
                  <Box className={classes.importantBrokerItem}>
                    <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
                      {formatMessage({ id: 'pim_details.summary.important_broker.key_number' })}
                    </Typography>
                    <Typography variant="h4" className={classes.importantBrokerValue}>
                      21
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className={classes.importantBrokerItem}>
                    <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
                      {formatMessage({ id: 'pim_details.summary.important_broker.asking_price' })}
                    </Typography>
                    <Typography variant="h4" className={classes.importantBrokerValue}>
                      Proin rhoncus neque vel ligula pellentesque elementum. Integer volutpat purus vitae mi lobortis.
                    </Typography>
                  </Box>
                  <Box className={classes.importantBrokerItem}>
                    <Typography variant="h5" className={clsx(classes.fontWeightMedium, classes.gray)}>
                      {formatMessage({ id: 'pim_details.summary.important_broker.defects_or_particulars' })}
                    </Typography>
                    <Typography variant="h4" className={classes.importantBrokerValue}>
                      Proin rhoncus neque vel ligula pellentesque elementum. Integer volutpat purus vitae mi lobortis.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            )}
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
