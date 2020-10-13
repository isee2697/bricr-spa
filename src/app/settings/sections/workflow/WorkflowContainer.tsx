import React, { useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useLayout } from 'context/layout';
import { AppRoute } from 'routing/AppRoute.enum';

import { Workflow } from './Workflow';
import * as dictionaries from './dictionaries';

export const WorkflowContainer = () => {
  const { setFullscreen } = useLayout();
  const { state } = useLocation<{
    iconName: string;
    isNew: boolean | undefined;
  }>();
  const { id } = useParams<{ id: string }>();
  const { push } = useHistory();

  useEffect(() => {
    setFullscreen(true);
  }, [setFullscreen]);

  const onToggleFullScreen = (isFullScreen: boolean) => {
    setFullscreen(isFullScreen);
  };

  const goBack = () => {
    push(AppRoute.settings + '/workflowTemplates');
    setFullscreen(false);
  };

  return (
    <Workflow
      onToggleFullScreen={onToggleFullScreen}
      name={id}
      iconName={state.iconName}
      isNew={state.isNew}
      goBack={goBack}
      actionsGroups={dictionaries.actionsGroups}
      triggersGroups={dictionaries.triggersGroups}
      initValues={dictionaries.sections}
      onAddSection={() => Promise.resolve(undefined)}
      onAddItem={() => Promise.resolve(undefined)}
    />
  );
};
