import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { AutosaveForm } from 'ui/organisms';
import { AppRoute } from 'routing/AppRoute.enum';
import { LabelInput } from 'api/types';
import { Templates } from 'api/mocks/workflow-templates';

import { WorkflowTemplatesContainerProps } from './WorkflowTemplatesContainer.types';
import { WorkflowTemplates } from './WorkflowTemplates';
import { WorkflowItem } from './WorkflowTemplates.types';

export const WorkflowTemplatesContainer = ({ templateType }: WorkflowTemplatesContainerProps) => {
  const { push } = useHistory();
  const [templates, setTemplates] = useState<WorkflowItem[]>(Templates);

  const handleAddTemplate = async (values: Pick<LabelInput, 'text' | 'icon'>) => {
    push(AppRoute.workflow.replace(':id', values.text), {
      iconName: values.icon,
      name: values.text,
      isNew: true,
    });

    return undefined;
  };

  const handleUpdateTemplate = async (template: WorkflowItem) => {
    const index = templates.findIndex(item => item.id === template.id);
    templates[index] = template;
    setTemplates([...templates]);
  };

  return (
    <AutosaveForm onSave={() => Promise.resolve(undefined)}>
      <WorkflowTemplates
        templates={templates}
        onAdd={handleAddTemplate}
        onUpdate={handleUpdateTemplate}
        dateUpdated={null}
        updatedBy={null}
        templateType={templateType}
      />
    </AutosaveForm>
  );
};
