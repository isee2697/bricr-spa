import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Box, Grid, IconButton, NavBreadcrumb } from 'ui/atoms';
import { FullscreenOnIcon, FullscreenOffIcon } from 'ui/atoms/icons';
import { SettingsHeader } from 'app/settings/settingsHeader/SettingsHeader';
import { AppRoute } from 'routing/AppRoute.enum';

import { WorkflowProps } from './Workflow.types';
import { useStyles } from './Workflow.styles';
import { WorkflowHeader } from './workflowHeader/WorkflowHeader';
import { WorkflowSidebar } from './workflowSidebar/WorkflowSidebar';

export const Workflow = ({
  onToggleFullScreen,
  name,
  iconName,
  goBack,
  actionsGroups,
  triggersGroups,
}: WorkflowProps) => {
  const { id } = useParams<{ id: string }>();
  const [fullScreen, setFullScreen] = useState(true);
  const classes = useStyles({ fullScreen });

  const handleFullScreenToggle = () => {
    onToggleFullScreen(!fullScreen);
    setFullScreen(t => !t);
  };

  return (
    <div className={classes.container}>
      <NavBreadcrumb title={name} urlBase={AppRoute.workflow.replace(':id', id)} />
      {!fullScreen && (
        <Box paddingBottom={2}>
          <SettingsHeader />
        </Box>
      )}
      <WorkflowHeader
        name={name}
        iconName={iconName}
        onAdd={() => {}}
        onBack={goBack}
        onRedo={() => {}}
        onUndo={() => {}}
      />
      <Grid container>
        <Grid item xs={2}>
          <WorkflowSidebar isFullScreen={fullScreen} actionsGroups={actionsGroups} triggersGroups={triggersGroups} />
        </Grid>
      </Grid>

      <div className={classes.controlContainer}>
        <IconButton onClick={handleFullScreenToggle} variant="rounded" size="small" className={classes.controlButton}>
          {fullScreen ? <FullscreenOffIcon /> : <FullscreenOnIcon />}
        </IconButton>
      </div>
    </div>
  );
};
