import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { useLayout } from 'context/layout';
import { AppRoute } from 'routing/AppRoute.enum';
import { useAuthState } from 'hooks';
import {
  CreateWorkflowSectionInput,
  WorkflowActionGroupType,
  WorkflowActionType,
  WorkflowTemplate,
  WorkflowTriggerType,
} from 'api/types';
import { Loader } from 'ui/atoms';

import { Workflow } from './Workflow';
import * as dictionaries from './dictionaries';
import { WorkflowSectionWithInfo } from './Workflow.types';

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
  const [workflowSections, setWorkflowSections] = useState<WorkflowSectionWithInfo[]>([]);

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

  const handleAddWorkflowTrigger = async (workflowSectionId: string, triggerType: WorkflowTriggerType) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_FILE_URL}/create-workflow-trigger`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
        body: JSON.stringify({
          workflowSectionId,
          type: triggerType,
        }),
      });

      if (response.ok) {
        await getWorkflowSections();
      }
    } catch (error) {
      return error;
    }
  };

  const handleAddWorkflowActionGroupAndAction = async (
    workflowTriggerId: string,
    workflowActionGroupType: WorkflowActionGroupType,
    type: WorkflowActionType,
  ) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_FILE_URL}/create-workflow-action`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
        body: JSON.stringify({
          workflowTriggerId,
          workflowActionGroupType,
          type,
        }),
      });

      if (response.ok) {
        await getWorkflowSections();
      }
    } catch (error) {
      return error;
    }
  };

  const handleAddWorkflowAction = async (
    workflowTriggerId: string,
    workflowActionGroupId: string,
    type: WorkflowActionType,
  ) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_FILE_URL}/create-workflow-action`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
        body: JSON.stringify({
          workflowTriggerId,
          workflowActionGroupId,
          type,
        }),
      });

      if (response.ok) {
        await getWorkflowSections();
      }
    } catch (error) {
      return error;
    }
  };

  const handleRemoveWorkflowAction = async (id: string) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_FILE_URL}/delete-workflow-action`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
        body: JSON.stringify({
          id,
        }),
      });

      if (response.ok) {
        await getWorkflowSections();
      }
    } catch (error) {
      return error;
    }
  };

  const handleRemoveWorkflowTrigger = async (id: string) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_FILE_URL}/delete-workflow-trigger`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
        body: JSON.stringify({
          id,
        }),
      });

      if (response.ok) {
        await getWorkflowSections();
      }
    } catch (error) {
      return error;
    }
  };

  const handleAddWorkflowSection = async (section: CreateWorkflowSectionInput) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_FILE_URL}/create-workflow-section`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
        body: JSON.stringify(section),
      });

      if (response.ok) {
        await getWorkflowSections();
      }
    } catch (error) {
      return error;
    }
  };

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
      workflowSections={workflowSections}
      onAddSection={(section: CreateWorkflowSectionInput) => handleAddWorkflowSection(section)}
      onAddWorkflowTrigger={(workflowSectionId: string, triggerType: WorkflowTriggerType) =>
        handleAddWorkflowTrigger(workflowSectionId, triggerType)
      }
      onAddWorkflowActionGroupAndAction={(
        workflowTriggerId: string,
        workflowActionGroupType: WorkflowActionGroupType,
        type: WorkflowActionType,
      ) => handleAddWorkflowActionGroupAndAction(workflowTriggerId, workflowActionGroupType, type)}
      onAddWorkflowAction={(workflowTriggerId: string, workflowActionGroupId: string, type: WorkflowActionType) =>
        handleAddWorkflowAction(workflowTriggerId, workflowActionGroupId, type)
      }
      onRemoveTrigger={(triggerId: string) => handleRemoveWorkflowTrigger(triggerId)}
      onRemoveAction={(actionId: string) => handleRemoveWorkflowAction(actionId)}
    />
  );
};
