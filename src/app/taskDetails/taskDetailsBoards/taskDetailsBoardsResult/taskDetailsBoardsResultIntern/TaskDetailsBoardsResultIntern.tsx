import React from 'react';
import arrayMutators from 'final-form-arrays';

import { useLocale } from 'hooks';
import { AutosaveForm } from 'ui/organisms';
import { GenericField } from 'form/fields';

import { useStyles } from './TaskDetailsBoardsResultIntern.styles';
import { TaskDetailsBoardsResultInternProps } from './TaskDetailsBoardsResultIntern.types';

export const TaskDetailsBoardsResultIntern = ({ task, onUpdateTask }: TaskDetailsBoardsResultInternProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const initialValues = {
    resultIntern: task.resultIntern,
  };

  const handleChange = async (body: { resultIntern: string }) => {
    onUpdateTask(task.id, body);

    return undefined;
  };

  return (
    <AutosaveForm initialValues={initialValues} onSave={handleChange} mutators={{ ...arrayMutators }}>
      <GenericField
        name="resultIntern"
        fullWidth
        multiline
        placeholder={formatMessage({ id: 'tasks.details.add_result.placeholder' })}
        className={classes.textField}
        classes={{
          root: classes.textField,
        }}
        InputProps={{ classes: { root: classes.textField, input: classes.textFieldInput } }}
      />
    </AutosaveForm>
  );
};
