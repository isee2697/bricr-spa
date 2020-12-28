import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'classnames';

import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  IconButton,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Badge,
} from 'ui/atoms';
import { InfoSection } from 'ui/molecules';
import { useLocale } from 'hooks';
import { ManageIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';

import { DashboardTasksProps } from './DashboardTasks.types';
import { DashboardTaskItem } from './DashboardTaskItem';
import { useStyles } from './DashboardTasks.styles';

export const DashboardTasks = ({ tasks }: DashboardTasksProps) => {
  const { formatMessage } = useLocale();
  const { push } = useHistory();
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        title={
          <Badge badgeContent={tasks.length} color="error">
            <Typography variant="h2">{formatMessage({ id: 'dashboard.tasks_today.title' })}</Typography>
          </Badge>
        }
        action={
          <IconButton size="small" variant="roundedContained">
            <ManageIcon />
          </IconButton>
        }
      />
      <CardContent>
        {tasks.length === 0 && (
          <InfoSection emoji="🤔">
            <Typography variant="h3">
              {formatMessage({
                id: 'dashboard.tasks_today.empty_title',
              })}
            </Typography>
            <Typography variant="h3">
              {formatMessage({
                id: 'dashboard.tasks_today.empty_description',
              })}
            </Typography>
          </InfoSection>
        )}
        {tasks.length > 0 && (
          <Table>
            <TableBody className={classes.taskTable}>
              {tasks
                .filter(task => !!task.deadline)
                .map(task => (
                  <DashboardTaskItem {...task} />
                ))}
              {tasks.filter(task => !task.deadline).length > 0 && (
                <TableRow>
                  <TableCell colSpan={5} className={clsx(classes.tableCell, classes.fontWeightBold)}>
                    <Typography variant="h3" color="textSecondary">
                      {formatMessage({ id: 'dashboard.tasks_today.no_specific_time_today' })}
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
              {tasks
                .filter(task => !task.deadline)
                .map(task => (
                  <DashboardTaskItem {...task} />
                ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          onClick={() => {
            push(AppRoute.tasks);
          }}
        >
          {formatMessage({ id: 'date.view_more' })}
        </Button>
      </CardActions>
    </Card>
  );
};
