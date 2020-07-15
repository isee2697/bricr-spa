import React from 'react';
import classNames from 'classnames';

import { Box, Grid, IconButton, Typography } from 'ui/atoms';
import { EditIcon } from 'ui/atoms/icons';

import { PhaseItemProps } from './PhaseItem.types';
import { useStyles } from './PhaseItem.styles';

export const PhaseItem = ({ inEditMode, phase, handleEdit }: PhaseItemProps) => {
  const classes = useStyles({ src: phase.logo?.url });

  return (
    <>
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
              <IconButton onClick={handleEdit} data-testid="edit-picture-button">
                <EditIcon />
              </IconButton>
            </Box>
          )}
        </Grid>
      </Grid>
    </>
  );
};
