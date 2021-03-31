import React from 'react';
import { useParams } from 'react-router';

import { DmsDetailsSidebarMenu } from 'app/shared/dms/sideBarMenu/SideBarMenu';
import { QuestionaireConfigureItemsContainer } from '../dmsTemplateDetails/dmsTemplateConfigureSettingsDetails/forms/questionnaireProperty/questionaireConfigureItems/QuestionaireConfigureItemsContainer';

import { DetailsSidebarMenuProps } from './DmsDetailsSidebarMenu.types';

export const DetailsSidebarMenu = (props: DetailsSidebarMenuProps) => {
  const { type } = useParams<{ type: string; category: string }>();

  let configureItems;

  if (type === 'questionnaire') {
    configureItems = <QuestionaireConfigureItemsContainer />;
  }

  return <DmsDetailsSidebarMenu {...props} configureItems={configureItems} />;
};
