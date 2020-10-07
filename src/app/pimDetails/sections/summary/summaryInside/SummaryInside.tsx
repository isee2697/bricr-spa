import React from 'react';
import clsx from 'classnames';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Button, Grid, Typography } from 'ui/atoms';
import { BuildingIcon, ShareIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { PimDetailsHeader } from '../../../pimDetailsHeader/PimDetailsHeader';

import { SummaryInsideProps } from './SummaryInside.types';
import { useStyles } from './SummaryInside.styles';
import { GroundfloorSpaces } from './groundfloorSpaces/GroundfloorSpaces';
import { Floor } from './floor/Floor';
import { HeatingSources } from './heatingSources/HeatingSources';
import { HotWaterSupplies } from './hotWaterSupplies/HotWaterSupplies';
import { AdditionalServices } from './additionalServices/AdditionalServices';

export const SummaryInside = ({ summaryInside, isSidebarVisible, onSidebarOpen }: SummaryInsideProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles(summaryInside);
  const { address } = summaryInside;

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
            {formatMessage({ id: 'pim_details.summary.inside.title' })}
          </Typography>
          <Typography variant="h1" className={clsx(classes.marginTopTwo, classes.fontWeightMedium)}>
            <BuildingIcon className={classes.addressIcon} color="error" /> {address}
          </Typography>
          <GroundfloorSpaces className={classes.groundfloorsSpacesSection} />
          <Floor />
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <HeatingSources />
              <HotWaterSupplies />
            </Grid>
            <Grid item xs={6}>
              <AdditionalServices />
            </Grid>
          </Grid>
        </Grid>
      </Page>
    </>
  );
};
