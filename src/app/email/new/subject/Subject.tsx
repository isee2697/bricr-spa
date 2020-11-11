import arrayMutators from 'final-form-arrays';
import React from 'react';

import { AutosaveForm } from 'ui/organisms';
import { Card, CardContent, Typography } from 'ui/atoms';
import { GenericField } from 'form/fields';
import { useLocale } from 'hooks';

import { useStyles } from './Subject.styles';

export const Subject = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const handleSave = async () => {
    return undefined;
  };

  return (
    <AutosaveForm onSave={handleSave} mutators={{ ...arrayMutators }}>
      <Card classes={{ root: classes.card }}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h6" className={classes.fontWeightMedium}>
            {formatMessage({ id: 'email.subject' })}
          </Typography>
          <GenericField name="subject" className={classes.subjectField} />
        </CardContent>
      </Card>
    </AutosaveForm>
  );
};
