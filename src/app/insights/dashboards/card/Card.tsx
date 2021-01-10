import React from 'react';

import { Card, CardContent, CardHeader, Box, IconButton } from 'ui/atoms';
import { DragIcon, MenuIcon } from 'ui/atoms/icons';

import { useStyles } from './Card.styles';
import { DashboardCardProps } from './Card.types';

export const DashboardCard = ({ children }: DashboardCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{ title: classes.cardHeaderTitle }}
        title={'Contacts'}
        action={
          <Box display="flex" alignItems="center">
            <IconButton size="small" variant="rounded" classes={{ sizeSmall: classes.cardHeaderButton }}>
              <MenuIcon />
            </IconButton>
            <Box ml={2} />
            <IconButton
              size="small"
              variant="rounded"
              classes={{ sizeSmall: classes.cardHeaderButton, root: classes.cardHeaderButtonRoot }}
              className={'dragPoint'}
            >
              <DragIcon />
            </IconButton>
          </Box>
        }
        className={classes.cardHeaderRoot}
      />
      <CardContent>{children}</CardContent>
    </Card>
  );
};
