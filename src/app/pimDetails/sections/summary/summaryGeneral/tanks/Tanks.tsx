import React from 'react';

import { Card, CardHeader, CardContent, Box, Typography } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';

import { useStyles } from './Tanks.styles';
import { TanksProps } from './Tanks.types';

export const Tanks = ({ tanks }: TanksProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={
          <Box display="flex" alignItems="center">
            <Typography variant="h2">{formatMessage({ id: 'pim_details.summary.tanks.title' })}</Typography>
            <Counter count={tanks.length} hasMarginLeft />
          </Box>
        }
      />
      <CardContent>
        {tanks.map((tank, index) => (
          <FormSubSection
            initiallyOpened={false}
            title={
              <>
                <Typography variant="h4" className={classes.index}>
                  {index + 1}
                </Typography>
                <Typography variant="h3">{tank.type}</Typography>
              </>
            }
            onOptionsClick={() => {}}
          >
            <Box className={classes.detailItem}>
              <Typography variant="h5" className={classes.detailItemLabel}>
                {formatMessage({ id: 'pim_details.summary.tank.inspection' })}
              </Typography>
              <Typography variant="h4" className={classes.detailItemValue}>
                {tank.description}
              </Typography>
            </Box>
          </FormSubSection>
        ))}
      </CardContent>
    </Card>
  );
};
