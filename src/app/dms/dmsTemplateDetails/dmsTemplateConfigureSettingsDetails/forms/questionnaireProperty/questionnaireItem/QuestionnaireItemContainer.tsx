import React from 'react';

import {
  QuestionInput,
  UpdateQuestionInput,
  useCreateQuestionMutation,
  useListQuestionsQuery,
  useUpdateQuestionMutation,
} from 'api/types';
import { useModalDispatch } from 'hooks';

import { QuestionnaireItem } from './QuestionnaireItem';
import { QuestionnaireItemContainerProps } from './QuestionnaireItem.types';

export const QuestionnaireItemContainer = ({ group, ...props }: QuestionnaireItemContainerProps) => {
  const [createQuestion] = useCreateQuestionMutation();
  const [updateQuestion] = useUpdateQuestionMutation();
  const { data, loading } = useListQuestionsQuery({
    variables: {
      groupId: group.id,
    },
    fetchPolicy: 'network-only',
  });
  const { close } = useModalDispatch();

  const handleAddQuestion = async (values: QuestionInput) => {
    try {
      await createQuestion({
        variables: {
          input: values,
        },
      });

      close('add-questionnaire-group-item');
    } catch (error) {
      close('add-questionnaire-group-item');

      return { error: true };
    }
  };

  const handleUpdateQuestion = async (questionId: string, values: UpdateQuestionInput) => {
    try {
      await updateQuestion({
        variables: {
          questionId,
          input: values,
        },
      });

      return undefined;
    } catch (error) {
      return { error: true };
    }
  };

  return (
    <QuestionnaireItem
      group={group}
      {...props}
      items={data?.listQuestions || []}
      isLoading={loading}
      onAddQuestion={handleAddQuestion}
      onUpdateQuestoin={handleUpdateQuestion}
    />
  );
};
