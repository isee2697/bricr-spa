import React from 'react';

import { Card, CardHeader, CardContent, Typography, Box } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { Counter } from 'ui/molecules/counter/Counter';
import { FormSubSection } from 'ui/organisms';

import { useStyles } from './Maintenance.styles';
import { MaintenanceProps } from './Maintenance.types';

export const Maintenance = ({ maintenances }: MaintenanceProps) => {
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
        {maintenances.map((maintenance, index) => (
          <FormSubSection
            initiallyOpened={false}
            title={
              <>
                <Typography variant="h4" className={classes.index}>
                  {index + 1}
                </Typography>
                <Typography variant="h3">{maintenance.type}</Typography>
              </>
            }
            onOptionsClick={() => {}}
          >
            <Box className={classes.detailItem}>
              <Typography variant="h5" className={classes.detailItemLabel}>
                {formatMessage({ id: 'pim_details.summary.maintenance.inspection' })}
              </Typography>
              <Typography variant="h4" className={classes.detailItemValue}>
                {maintenance.description}
              </Typography>
            </Box>
          </FormSubSection>
        ))}
      </CardContent>
    </Card>
  );
};
