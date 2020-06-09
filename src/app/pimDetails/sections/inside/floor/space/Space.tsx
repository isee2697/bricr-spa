import React from 'react';

import { SpaceType } from 'api/types';
import { FormSubSection } from 'ui/organisms';
import { Grid, Box } from 'ui/atoms';
import { useLocale } from 'hooks';

import { CommonForm } from './forms/CommonForm';
import { KitchenForm } from './forms/KitchenForm';
import { useStyles } from './Space.styles';
import { SpaceProps } from './Space.types';

const fieldPrefix = 'configuration';

export const Space = ({ isEditMode, index, space: { spaceName, spaceType } }: SpaceProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <FormSubSection
        title={`${spaceName || formatMessage({ id: `dictionaries.space_type.${spaceType}` })} ${index + 1}`}
        onOptionsClick={() => {}}
        initiallyOpened={index === 0}
      >
        <Grid container spacing={4}>
          {spaceType === SpaceType.Kitchen && <KitchenForm fieldPrefix={fieldPrefix} isEditMode={isEditMode} />}
          <CommonForm fieldPrefix={fieldPrefix} isEditMode={isEditMode} />
        </Grid>
      </FormSubSection>
    </Box>
  );
};
