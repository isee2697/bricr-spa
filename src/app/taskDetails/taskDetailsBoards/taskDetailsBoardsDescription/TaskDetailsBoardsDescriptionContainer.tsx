import React from 'react';
import { Chapter } from 'app/shared/media/textChapters/TextChapters.types';
import { GetTaskDocument, useUpdateTaskMutation } from 'api/types';

import { TaskDetailsBoardsDescriptionContainerProps } from './TaskDetailsBoardsDescriptionContainer.types';
import { TaskDetailsBoardsDescription } from './TaskDetailsBoardsDescription';

export const TaskDetailsBoardsDescriptionContainer = ({ task }: TaskDetailsBoardsDescriptionContainerProps) => {
  const { id } = task;
  const [updateTask] = useUpdateTaskMutation();

  const handleSave = async ({ chapter }: Chapter) => {
    try {
      if (!id) {
        throw new Error();
      }

      await updateTask({
        variables: {
          input: {
            id,
            description: JSON.stringify(chapter),
          },
        },
        refetchQueries: [
          {
            query: GetTaskDocument,
            variables: { id },
          },
        ],
      });

      return undefined;
    } catch (error) {
      return {
        error: true,
      };
    }
  };

  return <TaskDetailsBoardsDescription task={task} onSave={handleSave} />;
};
