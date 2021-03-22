import React, { useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { Templates } from 'api/mocks/dms';
import { useModalDispatch } from 'hooks';
import { useCreateQuestionaireMutation } from '../../../api/types';

import { DmsTemplates } from './DmsTemplates';
import { DmsTemplateItem } from './DmsTemplates.types';
import { DmsTemplatesContainerProps } from './DmsTemplatesContainer.types';

export const DmsTemplatesContainer = ({ category }: DmsTemplatesContainerProps) => {
  const [templates, setTemplates] = useState<DmsTemplateItem[]>(Templates);
  const [createQuestionaire] = useCreateQuestionaireMutation();
  const { push } = useHistory();
  const { type } = useParams<{ type: string }>();
  const { close } = useModalDispatch();
  const { pathname } = useLocation();

  const handleAddTemplate = async (values: { name: string }) => {
    close('dms-add-template');
    let id: string | undefined;

    switch (type) {
      case 'questionnaire':
        const response = await createQuestionaire({
          variables: {
            input: {
              questionaireName: values.name,
              entity: {
                type: type,
              },
              isAdmin: true,
              published: false,
            },
          },
        });

        id = response?.data?.createQuestionaire?.id;

        push(`${pathname}/${id}/general`, { newlyAdded: true, data: response?.data?.createQuestionaire });

        break;
    }

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
