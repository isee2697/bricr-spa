import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DateTime } from 'luxon';

import { useLayout } from 'context/layout';
import { AppRoute } from 'routing/AppRoute.enum';
import { useModalDispatch } from 'hooks';

import { ContractTemplatesDetails } from './ContractTemplatesDetails';
import { AddArticleGroupBody } from './addArticleGroupModal/AddArticleGroupModal.types';
import { ArticleGroup } from './ContractTemplatesDetails.types';

export const ContractTemplatesDetailsContainer = () => {
  const { setSidebarMenuVisible } = useLayout();
  const { push } = useHistory();
  const { close } = useModalDispatch();
  const [articleGroups, setArticleGroups] = useState<ArticleGroup[]>([]);

  useEffect(() => {
    setSidebarMenuVisible(false);
  }, [setSidebarMenuVisible]);

  const goBack = () => {
    push(`${AppRoute.settings}/contractTemplates`);
    setSidebarMenuVisible(true);
  };

  const handleAddArticleGroup = async (body: AddArticleGroupBody) => {
    setArticleGroups([
      ...articleGroups,
      {
        id: `${articleGroups.length}`,
        name: body.name,
      },
    ]);

    close('add-contract-templates-article-group');

    return undefined;
  };

  return (
    <ContractTemplatesDetails
      generalInfo={{
        id: '0001',
        name: 'Sales contract',
        version: 1,
        dateVersion: DateTime.local(),
      }}
      goBack={goBack}
      onAddArticleGroup={handleAddArticleGroup}
    />
  );
};
