import React from 'react';
import { useParams } from 'react-router';

import { DmsDetailsSidebarMenu } from 'app/shared/dms/sideBarMenu/SideBarMenu';
import { QuestionaireConfigureItemsContainer } from '../dmsTemplateDetails/dmsTemplateConfigureSettingsDetails/forms/questionnaireProperty/questionaireConfigureItems/QuestionaireConfigureItemsContainer';
import { DocumentContractType } from 'app/pimDetails/sections/documents/documentDetails/documentContract/DocumentContract.types';
import { PIM_DOCUMENT_CONTRACT } from 'api/mocks/pim';

import { DetailsSidebarMenuProps } from './DmsDetailsSidebarMenu.types';
import { ContractConfigureItems } from './configureItems/contract/ContractConfigureItems';

export const DetailsSidebarMenu = (props: DetailsSidebarMenuProps) => {
  const { type } = useParams<{ type: string; category: string }>();

  const data = type === 'contract' ? PIM_DOCUMENT_CONTRACT : undefined;

  let configureItems;

  if (type === 'questionnaire') {
    configureItems = <QuestionaireConfigureItemsContainer />;
  } else if (type === 'contract') {
    configureItems = <ContractConfigureItems data={data as DocumentContractType} />;
  }

  return <DmsDetailsSidebarMenu {...props} configureItems={configureItems} />;
};
