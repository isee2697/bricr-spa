import React from 'react';

import { Grid, IconButton, Typography, Button } from 'ui/atoms';
import { SettingsIcon, AddIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './TasksHeader.styles';
import { TasksHeaderProps } from './TasksHeader.types';

export const TasksHeader = ({ handleCreateTask }: TasksHeaderProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Grid container className={classes.root}>
      <Typography variant="h1" className={classes.header}>
        {formatMessage({ id: 'tasks.title' })}
      </Typography>

      <IconButton variant="rounded" size="small" onClick={() => {}} classes={{ root: classes.setting }}>
        <SettingsIcon />
      </IconButton>

      <Button
        color="primary"
        variant="contained"
        onClick={() => handleCreateTask()}
        startIcon={<AddIcon color="inherit" />}
        size="small"
      >
        {formatMessage({ id: 'tasks.add' })}
      </Button>
    </Grid>
  );
};
