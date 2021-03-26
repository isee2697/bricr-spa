import React from 'react';
import { useParams } from 'react-router';

import { useListQuestionaireGroupsQuery } from 'api/types';

import { QuestionaireConfigureItems } from './QuestionaireConfigureItems';

export const QuestionaireConfigureItemsContainer = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading } = useListQuestionaireGroupsQuery({
    variables: {
      templateId: id,
    },
    fetchPolicy: 'network-only',
  });

  return <QuestionaireConfigureItems isLoading={loading} groups={data?.listQuestionaireGroups || []} />;
};
