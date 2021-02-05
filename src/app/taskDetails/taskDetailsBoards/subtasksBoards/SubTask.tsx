import React, { useState } from 'react';

import { Box, Fade, IconButton, Typography } from 'ui/atoms';
import { CheckboxLoading } from 'ui/molecules';
import { DeleteIcon } from 'ui/atoms/icons';

import { useStyles } from './SubtasksBoards.styles';
import { SubtasksProps } from './SubtasksBoards.types';

export const SubTask = ({ isLoading, isCompleted, title, onUpdateSubtaskStatus, onDeleteSubtask }: SubtasksProps) => {
  const [deleting, setDeleting] = useState(false);
  const classes = useStyles();

  const onDelete = () => {
    setDeleting(true);
    onDeleteSubtask();
  };

  return (
    <Fade in={!deleting} timeout={deleting ? 1200 : 150}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box ml={-1} display="flex" alignItems="center" className={deleting ? classes.isDeleting : ''}>
          <CheckboxLoading checked={isCompleted} isLoading={isLoading} onChange={onUpdateSubtaskStatus} />
          <Typography variant="h5" className={!!isCompleted ? classes.completedSubtask : ''}>
            {title}
          </Typography>
        </Box>
        <IconButton variant="rounded" size="small" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Fade>
  );
};
