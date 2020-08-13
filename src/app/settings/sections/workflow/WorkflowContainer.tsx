import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { useLayout } from 'context/layout';
import { AppRoute } from 'routing/AppRoute.enum';

import { WorkflowSection } from './workflowSection/WorkflowSection.types';
import { Workflow } from './Workflow';
import * as dictionaries from './dictionaries';

export const WorkflowContainer = () => {
  const { setFullscreen } = useLayout();
  const { state } = useLocation<{ iconName: string }>();
  const { id } = useParams<{ id: string }>();
  const { push } = useHistory();
  const [sections, setSections] = useState<WorkflowSection[]>([
    { title: 'Workflow section 1', trigger: dictionaries.trigger },
    { title: 'Workflow section 2' },
  ]);

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

  const handleAddSection = async () => {
    setSections(s => {
      return [...s, { title: `Workflow section ${s.length + 1}` }];
    });

    return undefined;
  };

  return (
    <Workflow
      onToggleFullScreen={onToggleFullScreen}
      name={id}
      iconName={state.iconName}
      goBack={goBack}
      actionsGroups={dictionaries.actionsGroups}
      triggersGroups={dictionaries.triggersGroups}
      onAddSection={handleAddSection}
      sections={sections}
    />
  );
};
