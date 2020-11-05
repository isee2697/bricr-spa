import React from 'react';
import Badge from '@material-ui/core/Badge';
import { DateTime } from 'luxon';

import { Card, CardHeader, CardContent, IconButton, Box, Typography } from 'ui/atoms';
import { useLocale } from 'hooks';
import { CloseIcon, ManageIcon } from 'ui/atoms/icons';

import { useStyles } from './SalesDashboardProgressBoard.styles';
import { ArrowIconButton } from './buttons/ArrowIconButton';
import { CardsIconButton } from './buttons/CardsIconButton';
import { CloseIconButton } from './buttons/CloseIconButton';

export const SalesDashboardProgressBoard = () => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const filters = [
    {
      key: 'DateFrom',
      value: DateTime.local(),
    },
    {
      key: 'DateTill',
      value: DateTime.local(),
    },
    {
      key: 'AccountManager',
      value: 'Victor Martin Brochner',
    },
  ];

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'sales.dashboard.progress.title' })}
        action={
          <IconButton aria-label="manage" size="small" variant="roundedContained" onClick={() => {}}>
            <Badge badgeContent={3} color="primary">
              <ManageIcon color="inherit" />
            </Badge>
          </IconButton>
        }
      />
      <CardContent className={classes.cardContent}>
        <Box display="flex" flexWrap="wrap" className={classes.filterWrapper}>
          {filters.map((filter, index) => (
            <Box key={index} display="flex" alignItems="center" className={classes.filter}>
              <Typography variant="h5" className={classes.filterLabel}>
                {formatMessage({ id: `sales.dashboard.progress.filter.${filter.key}` })}:
              </Typography>
              <Typography variant="h5" className={classes.filterTitle}>
                {(filter.key === 'DateFrom' || filter.key === 'DateTo') &&
                  filter.value.toLocaleString(DateTime.DATE_SHORT)}
                {filter.key === 'AccountManager' && filter.value}
              </Typography>
              <CloseIcon />
            </Box>
          ))}
        </Box>
        <Box>
          <Box>
            <ArrowIconButton />
          </Box>
          <Box>
            <CardsIconButton />
          </Box>
          <Box>
            <CloseIconButton />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
