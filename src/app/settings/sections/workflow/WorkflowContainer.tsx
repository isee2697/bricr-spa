import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { useLayout } from 'context/layout';
import { AppRoute } from 'routing/AppRoute.enum';
import { useAuthState, useLocale } from 'hooks';
import {
  CreateWorkflowSectionInput,
  UpdateWorkflowActionInput,
  UpdateWorkflowTriggerInput,
  WorkflowActionGroupType,
  WorkflowActionType,
  WorkflowTemplate,
  WorkflowTriggerType,
  useUpdateWorkflowActionMutation,
  useUpdateWorkflowTriggerMutation,
} from 'api/types';
import { Loader, Snackbar, Alert } from 'ui/atoms';

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
  const { accessToken, user } = useAuthState();
  const [loading, setLoading] = useState(false);
  const [workflowTemplate, setWorkflowTemplate] = useState<WorkflowTemplate>();
  const [workflowSections, setWorkflowSections] = useState<WorkflowSectionWithInfo[]>([]);
  const [workflowSectionExpanded, setWorkflowSectionExpanded] = useState<WorkflowSectionWithInfo>();
  const [updateWorkflowAction] = useUpdateWorkflowActionMutation();
  const [updateWorkflowTrigger] = useUpdateWorkflowTriggerMutation();
  const [indicatorState, setIndicatorState] = useState<undefined | 'success' | 'error' | 'info'>(undefined);
  const { formatMessage } = useLocale();

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
          companyId: user?.company?.id,
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
          companyId: user?.company?.id,
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
          companyId: user?.company?.id,
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

  const handleAddWorkflowSection = async (section: Partial<CreateWorkflowSectionInput>) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_FILE_URL}/create-workflow-section`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
        body: JSON.stringify({ ...section, companyId: user?.company?.id }),
      });

      if (response.ok) {
        const workflowSectionAdded = await response.json();
        setWorkflowSections([...workflowSections, { ...workflowSectionAdded, triggers: [] }]);
        setWorkflowSectionExpanded(workflowSectionAdded);
        await getWorkflowSections();
      }
    } catch (error) {
      return error;
    }
  };

  const handleUpdateWorkflowAction = async (id: string, action: UpdateWorkflowActionInput) => {
    const { data: result, errors } = await updateWorkflowAction({
      variables: {
        id,
        input: action,
      },
    });

    if (!result || !result.updateWorkflowAction || errors) {
      setIndicatorState('error');
    } else {
      await getWorkflowSections();
    }
  };

  const handleUpdateWorkflowTrigger = async (id: string, trigger: UpdateWorkflowTriggerInput) => {
    const { data: result, errors } = await updateWorkflowTrigger({
      variables: {
        id,
        input: trigger,
      },
    });

    if (!result || !result.updateWorkflowTrigger || errors) {
      setIndicatorState('error');
    } else {
      await getWorkflowSections();
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
    <>
      <Workflow
        onToggleFullScreen={onToggleFullScreen}
        name={workflowTemplate.name}
        iconName={workflowTemplate.icon}
        isNew={state.isNew}
        goBack={goBack}
        actionsGroups={dictionaries.actionsGroups}
        triggersGroups={dictionaries.triggersGroups}
        workflowSections={workflowSections}
        expandedSection={workflowSectionExpanded}
        onAddSection={(section: Partial<CreateWorkflowSectionInput>) => handleAddWorkflowSection(section)}
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
        onUpdateAction={handleUpdateWorkflowAction}
        onUpdateTrigger={handleUpdateWorkflowTrigger}
      />
      <Snackbar
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        open={!!indicatorState}
        autoHideDuration={6000}
        onClose={() => setIndicatorState(undefined)}
      >
        <Alert variant="filled" severity={indicatorState}>
          {formatMessage({ id: 'common.autosaving' })}
        </Alert>
      </Snackbar>
    </>
  );
};
