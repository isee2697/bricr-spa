import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { Templates } from 'api/mocks/dms';
import { AppRoute } from 'routing/AppRoute.enum';

import { DmsTemplates } from './DmsTemplates';
import { DmsTemplateItem } from './DmsTemplates.types';
import { DmsTemplatesContainerProps } from './DmsTemplatesContainer.types';

export const DmsTemplatesContainer = ({ category }: DmsTemplatesContainerProps) => {
  const [templates, setTemplates] = useState<DmsTemplateItem[]>(Templates);
  const { push } = useHistory();
  const { type } = useParams<{ type: string }>();

  const handleAddTemplate = async () => {
    const { id } = await new Promise(resolve => setTimeout(() => resolve({ id: 'dms-template-3' }), 2000));
    push(`${AppRoute.dms}/templates/${type}/custom/${id}/general`);

    return undefined;
  };

  const handleUpdateTemplate = async (template: DmsTemplateItem) => {
    const index = templates.findIndex(item => item.id === template.id);
    templates[index] = template;
    setTemplates([...templates]);
  };

  return (
    <DmsTemplates category={category} templates={templates} onAdd={handleAddTemplate} onUpdate={handleUpdateTemplate} />
  );
};
