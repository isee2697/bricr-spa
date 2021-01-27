import React from 'react';
import clsx from 'classnames';

import { Card, CardContent, CardHeader, Box, IconButton } from 'ui/atoms';
import { DragIcon, MenuIcon } from 'ui/atoms/icons';

import { useStyles } from './Card.styles';
import { DashboardCardProps } from './Card.types';

export const DashboardCard = ({ children, isUpdating }: DashboardCardProps) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.card, isUpdating && 'updating')}>
      <CardHeader
        classes={{ title: classes.cardHeaderTitle }}
        title={'Contacts'}
        action={
          <Box display="flex" alignItems="center">
            <IconButton size="small" variant="rounded" classes={{ sizeSmall: classes.cardHeaderButton }}>
              <MenuIcon />
            </IconButton>
            <Box ml={2} />
            <Box className={clsx('dragPoint', classes.btnDrag)}>
              <DragIcon width={16} height={16} />
            </Box>
          </Box>
        }
        className={classes.cardHeaderRoot}
      />
      <CardContent>{children}</CardContent>
    </Card>
  );
};
