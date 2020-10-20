import React from 'react';

import { useLocale } from 'hooks';
import { Box, Card, CardContent, CardHeader, Typography, Grid } from 'ui/atoms';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';
import { CubicMeterIcon, EuroIcon, SquareMeterIcon } from 'ui/atoms/icons';
import { SummaryCardProps } from '../Summary.types';

import { useStyles } from './Objecttypes.styles';

export const Objecttypes = ({ summary: { objectTypes = [] } }: SummaryCardProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Box display="flex" alignItems="center">
            <Typography variant="h2">{formatMessage({ id: 'pim_details.summary.objecttypes.title' })}</Typography>
            <Counter count={objectTypes.length} hasMarginLeft />
          </Box>
        }
      />
      <CardContent>
        {objectTypes.map((objectType, index) => (
          <FormSubSection
            key={index}
            initiallyOpened={false}
            title={
              <>
                <Typography variant="h4" className={classes.index}>
                  {index + 1}
                </Typography>
                <Typography variant="h3">{objectType.name}</Typography>
              </>
            }
            onOptionsClick={() => {}}
          >
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Typography variant="h5" className={classes.detailItemLabel}>
                  {formatMessage({ id: 'pim_details.summary.objecttypes.price_from' })}
                </Typography>
                <Typography variant="h4" className={classes.detailItemValue}>
                  {objectType.salePriceFrom || 0} <EuroIcon className={classes.detailItemIcon} />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" className={classes.detailItemLabel}>
                  {formatMessage({ id: 'pim_details.summary.objecttypes.price_till' })}
                </Typography>
                <Typography variant="h4" className={classes.detailItemValue}>
                  {objectType.salePriceTo || 0} <EuroIcon className={classes.detailItemIcon} />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" className={classes.detailItemLabel}>
                  {formatMessage({ id: 'pim_details.summary.objecttypes.service_from' })}
                </Typography>
                <Typography variant="h4" className={classes.detailItemValue}>
                  85 <SquareMeterIcon className={classes.detailItemIconSmall} />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" className={classes.detailItemLabel}>
                  {formatMessage({ id: 'pim_details.summary.objecttypes.service_till' })}
                </Typography>
                <Typography variant="h4" className={classes.detailItemValue}>
                  85 <SquareMeterIcon className={classes.detailItemIconSmall} />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" className={classes.detailItemLabel}>
                  {formatMessage({ id: 'pim_details.summary.objecttypes.volume_from' })}
                </Typography>
                <Typography variant="h4" className={classes.detailItemValue}>
                  85 <CubicMeterIcon className={classes.detailItemIconSmall} />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" className={classes.detailItemLabel}>
                  {formatMessage({ id: 'pim_details.summary.objecttypes.volume_till' })}
                </Typography>
                <Typography variant="h4" className={classes.detailItemValue}>
                  85 <CubicMeterIcon className={classes.detailItemIconSmall} />
                </Typography>
              </Grid>
            </Grid>
          </FormSubSection>
        ))}
      </CardContent>
    </Card>
  );
};
