import React from 'react';

import { AppBar, Button, IconButton, Typography } from 'ui/atoms';
import { AddIcon, BackIcon, MenuIcon, RedoIcon, SquareIcon, UndoIcon } from 'ui/atoms/icons';
import { iconPickerIcons, useLocale } from 'hooks';

import { useStyles } from './WorkflowHeader.styles';
import { WorkflowHeaderProps } from './WorkflowHeader.types';

export const WorkflowHeader = ({ name, iconName, onBack }: WorkflowHeaderProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const icon = iconPickerIcons.find(icon => icon.name === iconName)?.icon ?? <SquareIcon color="inherit" />;

  return (
    <AppBar color="transparent" className={classes.root} position="relative">
      <IconButton onClick={onBack} variant="rounded" size="small">
        <BackIcon />
      </IconButton>
      <div className={classes.titleSection}>
        <div className={classes.icon}>{icon}</div>
        <Typography variant="h2">{name}</Typography>
      </div>
      <div className={classes.rightSection}>
        <div className={classes.undoRedo}>
          <IconButton onClick={() => {}} variant="rounded" size="small">
            <UndoIcon />
          </IconButton>
          <IconButton onClick={() => {}} variant="rounded" size="small">
            <RedoIcon />
          </IconButton>
        </div>
        <Button
          color="primary"
          variant="outlined"
          startIcon={<AddIcon color="inherit" />}
          onClick={() => {}}
          size="small"
          className={classes.newButton}
        >
          {formatMessage({ id: 'settings.workflow.add_workflow_section' })}
        </Button>
        <MenuIcon />
      </div>
    </AppBar>
  );
};
