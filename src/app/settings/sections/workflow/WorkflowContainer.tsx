import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { useLayout } from 'context/layout';
import { iconPickerIcons } from 'hooks/useCustomLabels';
import { SquareIcon } from 'ui/atoms/icons';

import { Workflow } from './Workflow';

export const WorkflowContainer = () => {
  const { setFullscreen } = useLayout();
  const { state } = useLocation<{ iconName: string }>();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setFullscreen(true);
  }, [setFullscreen]);

  const onToggleFullScreen = (isFullScreen: boolean) => {
    setFullscreen(isFullScreen);
  };

  return (
    <Workflow
      onToggleFullScreen={onToggleFullScreen}
      name={id}
      icon={iconPickerIcons.find(icon => icon.name === state.iconName)?.icon ?? <SquareIcon color="inherit" />}
    />
  );
};
