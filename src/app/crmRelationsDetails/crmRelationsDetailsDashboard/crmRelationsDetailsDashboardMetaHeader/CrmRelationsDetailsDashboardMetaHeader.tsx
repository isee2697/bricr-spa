import React from 'react';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Grid, Typography, Box } from 'ui/atoms';

import { useStyles } from './CrmRelationsDetailsDashboardMetaHeader.styles';
import {
  CrmRelationsDetailsDashboardMetaBoxProps,
  CrmRelationsDetailsDashboardMetaHeaderProps,
} from './CrmRelationsDetailsDashboardMetaHeader.types';

const CrmRelationsDetailsDashboardMetaBox = ({ label, count }: CrmRelationsDetailsDashboardMetaBoxProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.meta}>
      <Typography className={classes.metaCount} variant="h3">
        {count}
      </Typography>
      <Typography className={classes.metaLabel} variant="h6">
        {label}
      </Typography>
    </Box>
  );
};

export const CrmRelationsDetailsDashboardMetaHeader = ({
  matches,
  interests,
  viewings,
  biddings,
  candidate,
  optant,
}: CrmRelationsDetailsDashboardMetaHeaderProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const metaAsArray = [
    {
      label: 'matches',
      count: matches,
    },
    {
      label: 'interests',
      count: interests,
    },
    {
      label: 'viewings',
      count: viewings,
    },
    {
      label: 'biddings',
      count: biddings,
    },
    {
      label: 'candidate',
      count: candidate,
    },
    {
      label: 'optant',
      count: optant,
    },
  ];

  return (
    <Grid container spacing={1} className={classes.root}>
      {metaAsArray.map(meta => (
        <Grid item xs={2}>
          <CrmRelationsDetailsDashboardMetaBox
            key={meta.label}
            label={formatMessage({ id: `crm.item.meta.${meta.label}` })}
            count={meta.count}
          />
        </Grid>
      ))}
    </Grid>
  );
};
