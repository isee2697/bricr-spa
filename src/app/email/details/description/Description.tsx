import React from 'react';

import { EmailSectionsProps } from '../Details.types';
import { Box, Card, CardContent } from 'ui/atoms';

import { useStyles } from './Description.styles';

export const Description = ({ email: { body } }: EmailSectionsProps) => {
  const classes = useStyles();

  return (
    <Card>
      <CardContent className={classes.cardContent}>
        <Box mt={4} mr={3} ml={3} mb={4}>
          <div dangerouslySetInnerHTML={{ __html: body || '' }} />
        </Box>
      </CardContent>
    </Card>
  );
};
