import React from 'react';
import { useParams } from 'react-router';

import { DmsDetailsSidebarMenu } from 'app/shared/dms/sideBarMenu/SideBarMenu';
import { PIM_DOCUMENT_CONTRACT, PIM_DOCUMENT_QUESTIONNAIRE } from 'api/mocks/pim';
import { DocumentQuestionnaireType } from 'app/pimDetails/sections/documents/documentDetails/documentQuestionnaire/DocumentQuestionnaire.types';
import { DocumentContractType } from 'app/pimDetails/sections/documents/documentDetails/documentContract/DocumentContract.types';

import { DetailsSidebarMenuProps } from './DmsDetailsSidebarMenu.types';
import { QuestionnaireConfigureItems } from './configureItems/questionnaire/QuestionnaireConfigureItems';
import { ContractConfigureItems } from './configureItems/contract/ContractConfigureItems';

export const DetailsSidebarMenu = (props: DetailsSidebarMenuProps) => {
  const { type } = useParams<{ type: string; category: string }>();
  const data =
    type === 'questionnaire' ? PIM_DOCUMENT_QUESTIONNAIRE : type === 'contract' ? PIM_DOCUMENT_CONTRACT : undefined;

  let configureItems;

  if (type === 'questionnaire') {
    configureItems = <QuestionnaireConfigureItems data={data as DocumentQuestionnaireType} />;
  } else if (type === 'contract') {
    configureItems = <ContractConfigureItems data={data as DocumentContractType} />;
  }

  return <DmsDetailsSidebarMenu {...props} configureItems={configureItems} />;
};
