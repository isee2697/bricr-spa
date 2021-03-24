import React, { useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { Templates } from 'api/mocks/dms';
import { useModalDispatch } from 'hooks';
import { QuestionaireType, useCreateQuestionaireMutation } from '../../../api/types';

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
    try {
      if (
        Object.values(QuestionaireType).find(
          (templateType: string) => templateType.toLowerCase() === type.toLowerCase(),
        )
      ) {
        const response = await createQuestionaire({
          variables: {
            input: {
              templateName: values.name,
              type: type as QuestionaireType,
              entity: {
                type: type,
              },
              isAdmin: true,
              published: false,
            },
          },
        });

        const id = response?.data?.createQuestionaire?.id;

        close('dms-add-template');

        push(`${pathname}/${id}/general`, { newlyAdded: true, data: response?.data?.createQuestionaire });
      } else {
        throw new Error('common.template.type.not.found');
      }

      return undefined;
    } catch {
      return { error: true };
    }
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
