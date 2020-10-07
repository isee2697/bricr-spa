import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Box, Card, CardContent, CardHeader, Typography } from 'ui/atoms';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';

import { useStyles } from './Floor.styles';

export const Floor = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Box display="flex" alignItems="center">
            <Typography variant="h2">{formatMessage({ id: 'pim_details.summary.inside.floor.title' })}</Typography>
            <Counter count={5} hasMarginLeft />
          </Box>
        }
      />
      <CardContent>
        <FormSubSection
          initiallyOpened={false}
          title={
            <>
              <Typography variant="h4" className={classes.index}>
                1
              </Typography>
              <Typography variant="h3">Home office</Typography>
            </>
          }
          onOptionsClick={() => {}}
        >
          <div>Home office content</div>
        </FormSubSection>
        <FormSubSection
          initiallyOpened={false}
          title={
            <>
              <Typography variant="h4" className={classes.index}>
                1
              </Typography>
              <Typography variant="h3">Bathroom</Typography>
            </>
          }
          onOptionsClick={() => {}}
        >
          <div>Bathroom content</div>
        </FormSubSection>
        <FormSubSection
          initiallyOpened={false}
          title={
            <>
              <Typography variant="h4" className={classes.index}>
                1
              </Typography>
              <Typography variant="h3">Bathroom 2</Typography>
            </>
          }
          onOptionsClick={() => {}}
        >
          <div>Bathroom 2 content</div>
        </FormSubSection>
      </CardContent>
    </Card>
  );
};
