import React from 'react';
import clsx from 'classnames';

import { Box, Card, CardContent, CardHeader, Grid, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';
import { CrmIcon, MeterIcon, MutationIcon, SquareMeterIcon } from 'ui/atoms/icons';
import {
  BathroomSpace,
  BedroomSpace,
  HomeOfficeSpace,
  KitchenSpace,
  KitchenType,
  LivingRoomSpace,
  OtherSpace,
  SpaceType,
} from 'api/types';

import { useStyles } from './GroundfloorSpaces.styles';
import { GroundfloorSpacesProps } from './GroundfloorSpaces.types';
import { Kitchen } from './space/Kitchen';
import { Bathroom } from './space/Bathroom';
import { Bedroom } from './space/Bedroom';
import { HomeOffice } from './space/HomeOffice';
import { LivingRoom } from './space/LivingRoom';
import { Other } from './space/Other';

export const GroundfloorSpaces = ({ floor: { floorDescription, spaces = [] }, className }: GroundfloorSpacesProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={className}>
      <CardHeader
        title={
          <Box display="flex" alignItems="center">
            <Typography variant="h2">
              {formatMessage({ id: 'pim_details.summary.inside.groundfloors_spaces.title' })}
            </Typography>
            <Counter count={spaces?.length || 0} hasMarginLeft />
          </Box>
        }
      />
      <CardContent>
        {spaces &&
          spaces.length > 0 &&
          spaces.map((space, index) => (
            <FormSubSection
              key={index}
              title={
                <>
                  <Typography variant="h4" className={classes.index}>
                    {index + 1}
                  </Typography>
                  <Typography variant="h3">{space.spaceName}</Typography>
                </>
              }
              onOptionsClick={() => {}}
            >
              <Grid container spacing={1}>
                {space.spaceType === SpaceType.Kitchen && (
                  <Kitchen space={space.configuration as KitchenSpace & { kitchenType: KitchenType }} />
                )}
                {space.spaceType === SpaceType.Bathroom && <Bathroom space={space.configuration as BathroomSpace} />}
                {space.spaceType === SpaceType.Bedroom && <Bedroom space={space.configuration as BedroomSpace} />}
                {space.spaceType === SpaceType.HomeOffice && (
                  <HomeOffice space={space.configuration as HomeOfficeSpace} />
                )}
                {space.spaceType === SpaceType.LivingRoom && (
                  <LivingRoom space={space.configuration as LivingRoomSpace} />
                )}
                {space.spaceType === SpaceType.Other && <Other space={space.configuration as OtherSpace} />}
              </Grid>
            </FormSubSection>
          ))}
      </CardContent>
    </Card>
  );
};
