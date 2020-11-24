import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { AutosaveForm, FormSection } from 'ui/organisms';
import { Editor } from 'app/shared/media/form/parts/Editor';

import { TaskDetailsBoardsDescriptionProps } from './TaskDetailsBoardsDescription.types';
import { useStyles } from './TaskDetailsBoardsDescription.styles';

export const TaskDetailsBoardsDescription = ({ task, onSave }: TaskDetailsBoardsDescriptionProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const { description } = task;

  const initialValues = description
    ? {
        chapter: [...(JSON.parse(description) || [])],
      }
    : {
        chapter: [
          {
            type: 'paragraph',
            children: [{ text: '' }],
          },
        ],
      };

  return (
    <FormSection title={formatMessage({ id: 'tasks.details.description' })} isEditable className={classes.root}>
      {isEditing => (
        <AutosaveForm initialValues={initialValues} onSave={onSave}>
          <Editor disabled={!isEditing} />
        </AutosaveForm>
      )}
    </FormSection>
  );
};
