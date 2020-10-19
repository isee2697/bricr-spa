import React from 'react';

import { RichTextField } from 'form/fields/richTextField/RichTextField';
import { Card } from 'ui/atoms';

import { useStyles } from './Editor.styles';

export const EditorCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <RichTextField fullWidth withoutBorder disabled={false} name="chapter" />
    </Card>
  );
};
