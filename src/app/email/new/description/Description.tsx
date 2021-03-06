import arrayMutators from 'final-form-arrays';
import React from 'react';

import { AutosaveForm } from 'ui/organisms';
import { Box, Card, CardContent, Typography } from 'ui/atoms';
import { Editor } from 'app/shared/media/form/parts/Editor';
import { useLocale } from 'hooks';

import { useStyles } from './Description.styles';

export const Description = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const initialValues = {
    chapter: [
      {
        type: 'paragraph',
        children: [{ text: '' }],
      },
    ],
  };

  const handleSave = async () => {
    return undefined;
  };

  return (
    <AutosaveForm onSave={handleSave} initialValues={initialValues} mutators={{ ...arrayMutators }}>
      <Card>
        <CardContent className={classes.cardContent}>
          <Box mt={3} ml={2} mr={2}>
            <Typography variant="h6" className={classes.fontWeightMedium}>
              {formatMessage({ id: 'common.description' })}
            </Typography>
          </Box>
          <Box>
            <Editor disabled={false} noBorder />
          </Box>
        </CardContent>
      </Card>
    </AutosaveForm>
  );
};
