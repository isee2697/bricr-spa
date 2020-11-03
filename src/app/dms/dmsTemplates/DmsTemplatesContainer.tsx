import React, { useState } from 'react';

import { Templates } from 'api/mocks/dms';

import { DmsTemplates } from './DmsTemplates';
import { DmsTemplateItem } from './DmsTemplates.types';

export const DmsTemplatesContainer = () => {
  const [templates, setTemplates] = useState<DmsTemplateItem[]>(Templates);

  const handleAddTemplate = async () => {
    return undefined;
  };

  const handleUpdateTemplate = async (template: DmsTemplateItem) => {
    const index = templates.findIndex(item => item.id === template.id);
    templates[index] = template;
    setTemplates([...templates]);
  };

  return <DmsTemplates templates={templates} onAdd={handleAddTemplate} onUpdate={handleUpdateTemplate} />;
};
