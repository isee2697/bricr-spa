import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';

import { Templates } from 'api/mocks/dms';

import { DmsTemplates } from './DmsTemplates';
import { DmsTemplateItem } from './DmsTemplates.types';
import { DmsTemplatesContainerProps } from './DmsTemplatesContainer.types';

export const DmsTemplatesContainer = ({ category }: DmsTemplatesContainerProps) => {
  const [templates, setTemplates] = useState<DmsTemplateItem[]>(Templates);
  const { push } = useHistory();
  const { pathname } = useLocation();

  const handleAddTemplate = async () => {
    push(`${pathname}/${Templates[0].id}/general`);

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
