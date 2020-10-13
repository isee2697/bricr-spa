import React from 'react';
import clsx from 'classnames';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Button, Grid, Typography } from 'ui/atoms';
import { BuildingIcon, ShareIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { PimDetailsHeader } from '../../../pimDetailsHeader/PimDetailsHeader';

import { SummaryOutsideProps } from './SummaryOutside.types';
import { useStyles } from './SummaryOutside.styles';
import { Map } from './map/Map';
import { Cadastre } from './cadastre/Cadastre';
import { Location } from './location/Location';
import { Roof } from './roof/Roof';
import { OutsideSpaces } from './outsideSpaces/OutsideSpaces';

export const SummaryOutside = ({ summary, isSidebarVisible, onSidebarOpen }: SummaryOutsideProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles(summary);
  const { address, outside, cadastre } = summary;

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
            {formatMessage({ id: 'pim_details.summary.outside.title' })}
          </Typography>
          <Typography variant="h1" className={clsx(classes.marginTopTwo, classes.fontWeightMedium)}>
            <BuildingIcon className={classes.addressIcon} color="error" /> {address}
          </Typography>
          <Grid container spacing={3} className={classes.details}>
            <Grid item xs={6}>
              <Map />
              <Cadastre />
            </Grid>
            <Grid item xs={6}>
              <Location />
              {outside && outside.roofInformation && <Roof roof={outside.roofInformation} />}
              <OutsideSpaces />
            </Grid>
          </Grid>
        </Grid>
      </Page>
    </>
  );
};
