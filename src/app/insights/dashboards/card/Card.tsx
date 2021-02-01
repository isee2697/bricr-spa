import React from 'react';
import clsx from 'classnames';

import { Card, CardContent, CardHeader, Box } from 'ui/atoms';
import { DragIcon, EditIcon } from 'ui/atoms/icons';
import { ListOptionsMenu } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';
import { useLocale } from 'hooks/useLocale/useLocale';

import { DashboardCardProps } from './Card.types';
import { useStyles } from './Card.styles';

export const DashboardCard = ({ children, id, isUpdating, onEdit }: DashboardCardProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Card className={clsx(classes.card, isUpdating && 'updating')}>
      <CardHeader
        classes={{ title: classes.cardHeaderTitle }}
        title={'Contacts'}
        action={
          <Box display="flex" alignItems="center">
            <ListOptionsMenu id={id} onDeleteClick={() => {}} hideEditButton>
              <ListOptionsMenuItem
                title={formatMessage({
                  id: 'insights.menu.clone',
                })}
                icon={<EditIcon />}
              />
              <ListOptionsMenuItem
                title={formatMessage({
                  id: 'insights.menu.copy_url',
                })}
                icon={<EditIcon />}
              />
              <ListOptionsMenuItem
                title={formatMessage({
                  id: 'insights.menu.email_dashboard',
                })}
                icon={<EditIcon />}
              />
              <ListOptionsMenuItem
                title={formatMessage({
                  id: 'insights.menu.edit_details',
                })}
                icon={<EditIcon />}
                onClick={() => {
                  onEdit();
                }}
              />
              <ListOptionsMenuItem
                title={formatMessage({
                  id: 'insights.menu.inactive',
                })}
                icon={<EditIcon />}
              />
            </ListOptionsMenu>
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
