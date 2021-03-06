import React from 'react';

import { SpaceType } from 'api/types';
import { FormSubSection } from 'ui/organisms';
import { Grid, Box } from 'ui/atoms';
import { useLocale } from 'hooks';
import { Counter } from 'ui/molecules/counter/Counter';

import { CommonForm } from './forms/CommonForm';
import { KitchenForm } from './forms/KitchenForm';
import { LivingRoomForm } from './forms/LivingRoomForm';
import { BathroomForm } from './forms/BathroomForm';
import { BedroomForm } from './forms/BedroomForm';
import { HomeOfficeForm } from './forms/HomeOfficeForm';
import { OtherForm } from './forms/OtherForm';
import { useStyles } from './Space.styles';
import { SpaceProps } from './Space.types';

const fieldPrefix = 'configuration';

export const Space = ({
  isEditMode,
  isExpanded,
  onExpand,
  index,
  groupedSpaceCount,
  space: { spaceName, spaceType, id },
  onDimensionChange,
}: SpaceProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <FormSubSection
        title={
          <div data-testid="space-title">
            <Counter count={index + 1} hasMarginRight />
            {spaceName || formatMessage({ id: `dictionaries.space_type.${spaceType}` })} {groupedSpaceCount ?? ''}
          </div>
        }
        onOptionsClick={() => {}}
        initiallyOpened={false}
        isExpanded={isExpanded}
        onExpand={() => onExpand(id)}
      >
        <Grid container spacing={4}>
          {spaceType === SpaceType.Kitchen && <KitchenForm fieldPrefix={fieldPrefix} isEditMode={isEditMode} />}
          {spaceType === SpaceType.LivingRoom && <LivingRoomForm fieldPrefix={fieldPrefix} isEditMode={isEditMode} />}
          {spaceType === SpaceType.Bathroom && <BathroomForm fieldPrefix={fieldPrefix} isEditMode={isEditMode} />}
          {spaceType === SpaceType.Bedroom && <BedroomForm fieldPrefix={fieldPrefix} isEditMode={isEditMode} />}
          {spaceType === SpaceType.HomeOffice && <HomeOfficeForm fieldPrefix={fieldPrefix} isEditMode={isEditMode} />}
          {spaceType === SpaceType.Other && <OtherForm fieldPrefix={fieldPrefix} isEditMode={isEditMode} />}
          <CommonForm id={id} fieldPrefix={fieldPrefix} isEditMode={isEditMode} onDimensionChange={onDimensionChange} />
        </Grid>
      </FormSubSection>
    </Box>
  );
};
