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

export const Space = ({ isEditMode, isExpanded, onExpand, index, space: { spaceName, spaceType, id } }: SpaceProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <FormSubSection
        title={`${spaceName || formatMessage({ id: `dictionaries.space_type.${spaceType}` })} ${index + 1}`}
        onOptionsClick={() => {}}
        initiallyOpened={false}
        isExpanded={isExpanded}
        onExpand={() => onExpand(id)}
      >
        <Grid container spacing={4}>
          {spaceType === SpaceType.Kitchen && <KitchenForm fieldPrefix={fieldPrefix} isEditMode={isEditMode} />}
          <CommonForm id={id} fieldPrefix={fieldPrefix} isEditMode={isEditMode} />
        </Grid>
      </FormSubSection>
    </Box>
  );
};
