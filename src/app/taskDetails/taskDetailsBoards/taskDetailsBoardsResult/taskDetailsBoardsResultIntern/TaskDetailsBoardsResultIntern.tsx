import React from 'react';

import { Box, TextField } from 'ui/atoms';
import { useLocale } from 'hooks';

import { useStyles } from './TaskDetailsBoardsResultIntern.styles';

export const TaskDetailsBoardsResultIntern = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Box>
      <TextField
        fullWidth
        multiline
        placeholder={formatMessage({ id: 'tasks.details.add_result.placeholder' })}
        className={classes.textField}
        classes={{
          root: classes.textField,
        }}
        InputProps={{ classes: { root: classes.textField, input: classes.textFieldInput } }}
      />
    </Box>
  );
};
