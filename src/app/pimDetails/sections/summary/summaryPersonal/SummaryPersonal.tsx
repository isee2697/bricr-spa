import React from 'react';
import clsx from 'classnames';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Button, Grid, Typography } from 'ui/atoms';
import { BuildingIcon, ShareIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { PimDetailsHeader } from '../../../pimDetailsHeader/PimDetailsHeader';

import { SummaryPersonalProps } from './SummaryPersonal.types';
import { useStyles } from './SummaryPersonal.styles';
import { PersonalInformation } from './personalInformation/PersonalInformation';
import { Financials } from './financials/Financials';
import { MovableProperty } from './movableProperty/MovableProperty';
import { DeedOfPurchaseHouse } from './deedOfPurchaseHouse/DeedOfPurchaseHouse';
import { SalesOrder } from './salesOrder/SalesOrder';
import { Questionnaire } from './questionnaire/Questionnaire';

export const SummaryPersonal = ({ summaryPersonal, isSidebarVisible, onSidebarOpen }: SummaryPersonalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles(summaryPersonal);
  const { address } = summaryPersonal;

  return (
    <>
      <PimDetailsHeader
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        action={
          <Button
            color="primary"
            startIcon={<ShareIcon className={classes.btnHeader} />}
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
            {formatMessage({ id: 'pim_details.summary.personal.title' })}
          </Typography>
          <Typography variant="h1" className={clsx(classes.marginTopTwo, classes.fontWeightMedium)}>
            <BuildingIcon className={classes.addressIcon} color="error" /> {address}
          </Typography>
          <Grid container spacing={3} className={classes.details}>
            <Grid item xs={12}>
              <PersonalInformation />
            </Grid>
            <Grid item xs={6}>
              <Financials />
              <MovableProperty />
            </Grid>
            <Grid item xs={6}>
              <DeedOfPurchaseHouse />
              <SalesOrder />
            </Grid>
            <Grid item xs={12}>
              <Questionnaire />
            </Grid>
          </Grid>
        </Grid>
      </Page>
    </>
  );
};
