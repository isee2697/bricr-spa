import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { useLayout } from 'context/layout';
import { AppRoute } from 'routing/AppRoute.enum';
import { useAuthState } from 'hooks';
import { WorkflowSection, WorkflowTemplate } from 'api/types';
import { Loader } from 'ui/atoms';

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
  const { accessToken } = useAuthState();
  const [loading, setLoading] = useState(false);
  const [workflowTemplate, setWorkflowTemplate] = useState<WorkflowTemplate>();
  const [workflowSections, setWorkflowSections] = useState<WorkflowSection[]>([]);

  useEffect(() => {
    setFullscreen(true);
  }, [setFullscreen]);

  useEffect(() => {
    const getWorkflowTemplateItem = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_FILE_URL}/get-workflow-template?id=${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + accessToken,
          },
        });

        if (response.ok) {
          const workflowTemplateItem = await response.json();
          setWorkflowTemplate(workflowTemplateItem);
        }
        setLoading(false);
      } catch (error) {
        push(AppRoute.workflow);
      }
    };

    const getWorkflowSections = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_FILE_URL}/get-workflow-section-list?id=${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + accessToken,
          },
        });

        if (response.ok) {
          const workflowSecctionsObject = await response.json();
          setWorkflowSections(workflowSecctionsObject);
        }
        setLoading(false);
      } catch (error) {
        push(AppRoute.workflow);
      }
    };

    setLoading(true);
    getWorkflowTemplateItem();
    getWorkflowSections();
  }, [accessToken, id, push]);

  const onToggleFullScreen = (isFullScreen: boolean) => {
    setFullscreen(isFullScreen);
  };

  const goBack = () => {
    push(AppRoute.settings + '/workflowTemplates');
    setFullscreen(false);
  };

  if (loading || !workflowTemplate) {
    return <Loader />;
  }

  return (
    <Workflow
      onToggleFullScreen={onToggleFullScreen}
      name={workflowTemplate.name}
      iconName={workflowTemplate.icon}
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
