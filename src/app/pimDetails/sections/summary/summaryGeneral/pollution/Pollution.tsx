import React from 'react';
import { Card, CardHeader, CardContent, Typography, Box } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';

import { useStyles } from './Pollution.styles';

export const Pollution = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Box display="flex" alignItems="center">
            <Typography variant="h2">{formatMessage({ id: 'pim_details.summary.pollution.title' })}</Typography>
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
              <Typography variant="h3">Soil</Typography>
            </>
          }
          onOptionsClick={() => {}}
        >
          <div>Soil content</div>
        </FormSubSection>
        <FormSubSection
          initiallyOpened={false}
          title={
            <>
              <Typography variant="h4" className={classes.index}>
                1
              </Typography>
              <Typography variant="h3">Asbestos</Typography>
            </>
          }
          onOptionsClick={() => {}}
        >
          <div>Asbestos content</div>
        </FormSubSection>
      </CardContent>
    </Card>
  );
};
