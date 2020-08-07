import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { IconButton, NavBreadcrumb } from 'ui/atoms';
import { FullscreenOnIcon, FullscreenOffIcon } from 'ui/atoms/icons';
import { SettingsHeader } from 'app/settings/settingsHeader/SettingsHeader';
import { AppRoute } from 'routing/AppRoute.enum';

import { WorkflowProps } from './Workflow.types';
import { useStyles } from './Workflow.styles';

export const Workflow = ({ onToggleFullScreen, name }: WorkflowProps) => {
  const { id } = useParams<{ id: string }>();
  const [fullScreen, setFullScreen] = useState(true);
  const classes = useStyles({ fullScreen });

  const handleFullScreenToggle = () => {
    onToggleFullScreen(!fullScreen);
    setFullScreen(t => !t);
  };

  return (
    <>
      <NavBreadcrumb title={name} urlBase={AppRoute.workflow.replace(':id', id)} />
      {!fullScreen && <SettingsHeader />}
      <div className={classes.controlContainer}>
        <IconButton onClick={handleFullScreenToggle} variant="rounded" size="small" className={classes.controlButton}>
          {fullScreen ? <FullscreenOffIcon /> : <FullscreenOnIcon />}
        </IconButton>
      </div>
    </>
  );
};
