import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Card, CardContent, CardHeader, Typography } from 'ui/atoms';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';
import {
  GarageFeature,
  GardenFeature,
  OutsideFeatureType,
  ParkingLotFeature,
  StorageFeature,
  TerrainFeature,
} from 'api/types';

import { useStyles } from './OutsideSpaces.styles';
import { OutsideSpacesProps } from './OutsideSpaces.types';
import { Garage } from './garage/Garage';
import { Garden } from './garden/Garden';
import { ParkingLot } from './parkingLot/ParkingLot';
import { Storage } from './storage/Storage';
import { Terrain } from './terrain/Terrain';

export const OutsideSpaces = ({ outsideFeatures }: OutsideSpacesProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Box display="flex" alignItems="center">
            <Typography variant="h2">
              {formatMessage({ id: 'pim_details.summary.outside.outside_spaces.title' })}
            </Typography>
            <Counter count={5} hasMarginLeft />
          </Box>
        }
      />
      <CardContent>
        {outsideFeatures.map((outsideFeature, index) => (
          <FormSubSection
            key={index}
            title={
              <>
                <Typography variant="h4" className={classes.detailPanelIndex}>
                  {index + 1}
                </Typography>
                <Typography variant="h3">
                  {formatMessage({ id: `dictionaries.outside_feature.${outsideFeature.type}` })}
                </Typography>
              </>
            }
            initiallyOpened={false}
            onOptionsClick={() => {}}
          >
            {outsideFeature.type === OutsideFeatureType.Garage && (
              <Garage configuration={outsideFeature.configuration as GarageFeature} />
            )}
            {outsideFeature.type === OutsideFeatureType.Garden && (
              <Garden configuration={outsideFeature.configuration as GardenFeature} />
            )}
            {outsideFeature.type === OutsideFeatureType.ParkingLot && (
              <ParkingLot configuration={outsideFeature.configuration as ParkingLotFeature} />
            )}
            {outsideFeature.type === OutsideFeatureType.Storage && (
              <Storage configuration={outsideFeature.configuration as StorageFeature} />
            )}
            {outsideFeature.type === OutsideFeatureType.Terrain && (
              <Terrain configuration={outsideFeature.configuration as TerrainFeature} />
            )}
          </FormSubSection>
        ))}
      </CardContent>
    </Card>
  );
};
