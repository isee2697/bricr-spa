import React, { useState } from 'react';

import { SpaceType } from 'api/types';
import { SubSectionHeader } from 'ui/molecules';
import { Collapse, Grid, Box } from 'ui/atoms';
import { useLocale } from 'hooks';

import { CommonForm } from './forms/CommonForm';
import { KitchenForm } from './forms/KitchenForm';
import { useStyles } from './Space.styles';
import { SpaceProps } from './Space.types';

const fieldPrefix = 'configuration';

export const Space = ({ isEditMode, index, space: { spaceName, spaceType } }: SpaceProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const [isToggled, setToggled] = useState(index === 0);

  return (
    <Box className={classes.container}>
      <SubSectionHeader
        toggled={isToggled}
        onToggleClick={() => {
          setToggled(t => !t);
        }}
        onOptionsClick={() => {}}
      >
        {spaceName || formatMessage({ id: `dictionaries.space_type.${spaceType}` })} {index + 1}
      </SubSectionHeader>

      <Collapse style={{ width: '100%' }} in={isToggled} timeout="auto" unmountOnExit>
        <Grid container spacing={4}>
          {spaceType === SpaceType.Kitchen && <KitchenForm fieldPrefix={fieldPrefix} isEditMode={isEditMode} />}
          <CommonForm fieldPrefix={fieldPrefix} isEditMode={isEditMode} />
        </Grid>
      </Collapse>
    </Box>
  );
};
