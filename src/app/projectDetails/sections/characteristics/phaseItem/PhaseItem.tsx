import React, { useState } from 'react';
import classNames from 'classnames';

import { Box, Grid, IconButton, Typography } from 'ui/atoms';
import { GenericField } from 'form/fields';
import { EditIcon } from 'ui/atoms/icons';
import { PhaseModalContainer } from '../phaseModal/PhaseModalContainer';

import { PhaseItemProps } from './PhaseItem.types';
import { useStyles } from './PhaseItem.styles';

export const PhaseItem = ({ inEditMode, phase }: PhaseItemProps) => {
  const [isModalOpened, setModalOpened] = useState(false);

  const classes = useStyles({ src: phase.image });

  return (
    <>
      <Box mb={4}>
        <GenericField
          name="phase.name"
          placeholder="project_details.characteristics.phase.placeholder"
          label="project_details.characteristics.phase.label"
          disabled={!inEditMode}
        />
      </Box>

      <Grid container spacing={0} className={classNames(classes.container, inEditMode && classes.selected)}>
        <Grid item xs={3}>
          <div className={classes.image} />
        </Grid>
        <Grid item xs={8}>
          <Box className={classes.content}>
            <Typography className={classNames(classes.title, !inEditMode && classes.disabledText)} variant="h4">
              {phase.name}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1}>
          {inEditMode && (
            <Box display="flex" justifyContent="flex-end" padding={0.5}>
              <IconButton onClick={() => setModalOpened(true)} data-testid="edit-picture-button">
                <EditIcon />
              </IconButton>
            </Box>
          )}
        </Grid>
      </Grid>
      <PhaseModalContainer isOpened={isModalOpened} onClose={() => setModalOpened(false)} selectedPhase={phase.id} />
    </>
  );
};
