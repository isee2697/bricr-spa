import React from 'react';

import { Card, CardHeader, CardContent, Typography, Box } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';

import { useStyles } from './Maintenance.styles';

export const Maintenance = () => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Box display="flex" alignItems="center">
            <Typography variant="h2">{formatMessage({ id: 'pim_details.summary.maintenance.title' })}</Typography>
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
              <Typography variant="h3">Paintwork</Typography>
            </>
          }
          onOptionsClick={() => {}}
        >
          <div>Paintwork content</div>
        </FormSubSection>
        <FormSubSection
          initiallyOpened={false}
          title={
            <>
              <Typography variant="h4" className={classes.index}>
                1
              </Typography>
              <Typography variant="h3">Window frames</Typography>
            </>
          }
          onOptionsClick={() => {}}
        >
          <div>Window frames content</div>
        </FormSubSection>
      </CardContent>
    </Card>
  );
};
