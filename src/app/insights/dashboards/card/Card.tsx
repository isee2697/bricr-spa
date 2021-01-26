import React from 'react';
import clsx from 'classnames';

import { Card, CardContent, CardHeader, Box } from 'ui/atoms';
import { DragIcon } from 'ui/atoms/icons';
import { ActionButtons } from 'app/insights/common/ActionButtons/ActionButtons';

import { useStyles } from './Card.styles';
import { DashboardCardProps } from './Card.types';

export const DashboardCard = ({ children, id, onEdit }: DashboardCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        classes={{ title: classes.cardHeaderTitle }}
        title={'Contacts'}
        action={
          <Box display="flex" alignItems="center">
            <ActionButtons id={id} onEditDetails={onEdit} />
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
