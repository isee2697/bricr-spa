import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useCreateQuestionaireMutation, useGetQuestionairesQuery } from '../../../api/types';
import { useGetTemplateType, useModalDispatch } from 'hooks';
import { TemplateItem } from '../dmsTemplateDetails/dmsTemplateConfigureSettingsDetails/DmsTemplateConfigureSettingsDetails.types';

import { DmsTemplates } from './DmsTemplates';
import { DmsTemplatesContainerProps } from './DmsTemplatesContainer.types';

export const DmsTemplatesContainer = ({ category }: DmsTemplatesContainerProps) => {
  const [createQuestionaire] = useCreateQuestionaireMutation();
  const { push } = useHistory();
  const type = useGetTemplateType();
  const { close } = useModalDispatch();
  const { pathname } = useLocation();
  const response = useGetQuestionairesQuery({
    variables: {
      type,
    },
  });

  const handleAddTemplate = async (values: { name: string }) => {
    try {
      if (type) {
        const response = await createQuestionaire({
          variables: {
            input: {
              templateName: values.name,
              type,
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

  const handleUpdateTemplate = async (template: TemplateItem) => {};

  return (
    <DmsTemplates
      category={category}
      templates={response.data?.getQuestionaires ?? []}
      onAdd={handleAddTemplate}
      onUpdate={handleUpdateTemplate}
    />
  );
};
