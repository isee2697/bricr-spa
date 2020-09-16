import React, { useState } from 'react';

import { Card, CardHeader, CardContent, Switch, FormControlLabel } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AutosaveForm } from 'ui/organisms';
import { Editor } from 'app/shared/media/form/parts/Editor';

import { TaskDetailsBoardsDescriptionProps } from './TaskDetailsBoardsDescription.types';
import { useStyles } from './TaskDetailsBoardsDescription.styles';

export const TaskDetailsBoardsDescription = ({ task, onSave }: TaskDetailsBoardsDescriptionProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

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
    <Card className={classes.root}>
      <CardHeader
        title={formatMessage({ id: 'tasks.details.description' })}
        action={
          <FormControlLabel
            control={<Switch checked={isEditing} onChange={() => setIsEditing(!isEditing)} color="primary" />}
            label={formatMessage({ id: 'form_section.edit_mode' })}
            labelPlacement="start"
          />
        }
      />
      <CardContent>
        <AutosaveForm initialValues={initialValues} onSave={onSave}>
          <Editor disabled={!isEditing} />
        </AutosaveForm>
      </CardContent>
    </Card>
  );
};
