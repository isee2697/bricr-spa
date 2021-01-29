import React from 'react';
import clsx from 'classnames';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Button, Grid, Typography } from 'ui/atoms';
import { BuildingIcon, ExitIcon } from 'ui/atoms/icons';
import { Page } from 'ui/templates';
import { PimDetailsHeader } from '../../../pimDetailsHeader/PimDetailsHeader';
import { Space } from 'api/types';

import { SummaryInsideProps } from './SummaryInside.types';
import { useStyles } from './SummaryInside.styles';
import { FloorSpaces } from './floorSpaces/FloorSpaces';
import { HeatingSources } from './heatingSources/HeatingSources';
import { HotWaterSupplies } from './hotWaterSupplies/HotWaterSupplies';
import { AdditionalServices } from './additionalServices/AdditionalServices';

export const SummaryInside = ({ summary, isSidebarVisible, onSidebarOpen }: SummaryInsideProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles(summary);
  const { address, floors, services } = summary;

  const floorSpaces =
    floors
      ?.filter(floor => !!floor.spaces)
      .sort((floor1, floor2) => floor1.level - floor2.level)
      .map(({ floorType, spaces }) => ({
        floorType,
        spaces,
      })) || [];

  return (
    <>
      <PimDetailsHeader
        isSidebarVisible={isSidebarVisible}
        onSidebarOpen={onSidebarOpen}
        action={
          <Button
            color="primary"
            startIcon={<ExitIcon className={classes.btnHeader} />}
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
          <Typography variant="h1" className={clsx(classes.marginTopTwo, classes.fontWeightMedium, classes.address)}>
            <BuildingIcon className={classes.addressIcon} color="error" /> {address}
          </Typography>
          {floorSpaces.map(({ floorType, spaces }, index) => (
            <FloorSpaces key={index} floorIndex={index} floorType={floorType} spaces={spaces as Space[]} />
          ))}
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <HeatingSources heatingSources={services?.heatingSources || []} />
              <HotWaterSupplies hotWaterSupplies={services?.hotWaterSupplies || []} />
            </Grid>
            <Grid item xs={6}>
              <AdditionalServices additionalServices={services?.additionalServices || []} />
            </Grid>
          </Grid>
        </Grid>
      </Page>
    </>
  );
};
