import React from 'react';
import { useHistory } from 'react-router-dom';

import { AutosaveForm } from 'ui/organisms';
import { AppRoute } from 'routing/AppRoute.enum';
import { LabelInput } from 'api/types';
import { Templates } from 'api/mocks/workflow-templates';

import { WorkflowTemplates } from './WorkflowTemplates';

export const WorkflowTemplatesContainer = () => {
  const { push } = useHistory();

  const handleAddTemplate = async (values: Pick<LabelInput, 'text' | 'icon'>) => {
    push(AppRoute.workflow.replace(':id', values.text), {
      iconName: values.icon,
      name: values.text,
    });

    return undefined;
  };

  const templates = Templates;

  return (
    <AutosaveForm onSave={() => Promise.resolve(undefined)}>
      <WorkflowTemplates templates={templates} onAdd={handleAddTemplate} dateUpdated={null} updatedBy={null} />
    </AutosaveForm>
  );
};
