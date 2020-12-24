import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AutosaveForm } from 'ui/organisms';
import { AppRoute } from 'routing/AppRoute.enum';
import { LabelInput, WorkflowTemplate } from 'api/types';
import { Templates } from 'api/mocks/workflow-templates';
import { useAuthState } from 'hooks';
import { useGetWorkflowTemplateList } from 'hooks/useGetWorkflowTemplateList/useGetWorkflowTemplateList';

import { WorkflowTemplatesContainerProps } from './WorkflowTemplatesContainer.types';
import { WorkflowTemplates } from './WorkflowTemplates';
import { WorkflowItem } from './WorkflowTemplates.types';

export const WorkflowTemplatesContainer = ({ templateType }: WorkflowTemplatesContainerProps) => {
  const { push } = useHistory();
  const { accessToken, user } = useAuthState();
  const { data, status, setStatus } = useGetWorkflowTemplateList();
  const [templates, setTemplates] = useState<WorkflowItem[]>(Templates);

  const handleAddTemplate = async (values: Pick<LabelInput, 'text' | 'icon'>) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_FILE_URL}/create-workflow-template`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
        body: JSON.stringify({
          companyId: user?.company?.id,
          name: values.text,
          icon: values.icon,
        }),
      });

      if (response.ok) {
        const workflowTemplate: WorkflowTemplate = await response.json();
        push(AppRoute.workflow.replace(':id', workflowTemplate.id), {
          iconName: workflowTemplate.icon,
          name: workflowTemplate.name,
          isNew: true,
        });
      }

      return undefined;
    } catch (error) {
      return error;
    }
  };

  const handleUpdateTemplate = async (template: WorkflowItem) => {
    const index = templates.findIndex(item => item.id === template.id);
    templates[index] = template;
    setTemplates([...templates]);
  };

  return (
    <AutosaveForm onSave={() => Promise.resolve(undefined)}>
      <WorkflowTemplates
        templates={data}
        onAdd={handleAddTemplate}
        onUpdate={handleUpdateTemplate}
        dateUpdated={null}
        updatedBy={null}
        templateType={templateType}
        status={status}
        onStatusChange={setStatus}
      />
    </AutosaveForm>
  );
};
