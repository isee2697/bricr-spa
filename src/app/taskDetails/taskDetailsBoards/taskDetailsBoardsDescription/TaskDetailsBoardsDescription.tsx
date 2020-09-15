import React, { useState } from 'react';

import { Card, CardHeader, CardContent, Switch, FormControlLabel, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';

import { TaskDetailsBoardsDescriptionProps } from './TaskDetailsBoardsDescription.types';
import { useStyles } from './TaskDetailsBoardsDescription.styles';

export const TaskDetailsBoardsDescription = ({ task }: TaskDetailsBoardsDescriptionProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [isEditing, setIsEditing] = useState(false);

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
        <Typography variant="h1">Title of the chapter</Typography>
        <Typography variant="h2">Subtitle of the chapter</Typography>
        <Typography variant="h3">
          Ut a consectetur quam. Nunc mattis laoreet efficitur. Quisque egestas nulla nec tellus pretium, a luctus orci
          blandit. Nulla semper lectus rutrum, tempor quam ac, tristique tortor.
        </Typography>
      </CardContent>
    </Card>
  );
};
