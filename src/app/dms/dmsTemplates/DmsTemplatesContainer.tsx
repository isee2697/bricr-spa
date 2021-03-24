import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';


import { useModalDispatch } from 'hooks';
import { useCreateQuestionaireMutation, useGetQuestionairesQuery } from '../../../api/types';

import { DmsTemplates } from './DmsTemplates';
import { DmsTemplatesContainerProps } from './DmsTemplatesContainer.types';
import { TemplateItem } from '../dmsTemplateDetails/dmsTemplateConfigureSettingsDetails/DmsTemplateConfigureSettingsDetails.types';

export const DmsTemplatesContainer = ({ category }:DmsTemplatesContainerProps) => {
  const [createQuestionaire] = useCreateQuestionaireMutation();

  const { push } = useHistory();
  const { type } = useParams<{ type: string }>();
  const { close } = useModalDispatch();
  const { pathname } = useLocation();
  const response  = useGetQuestionairesQuery();
  console.log("response")
  console.log(response)
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
        console.log("getQuestionaires")
        // console.log(getQuestionaires)
        id = response?.data?.createQuestionaire?.id;

        push(`${pathname}/${id}/general`, { newlyAdded: true, data: response?.data?.createQuestionaire });

        break;
    }

    return undefined;
  };
  const handleUpdateTemplate = async (template: TemplateItem) => {
  
  };

   
  return (
    <div>
       <DmsTemplates category={category} templates={response.data?.getQuestionaires ?? []} 
       onAdd={handleAddTemplate} 
       onUpdate={handleUpdateTemplate} 
       />
    </div>
    
  );
};
