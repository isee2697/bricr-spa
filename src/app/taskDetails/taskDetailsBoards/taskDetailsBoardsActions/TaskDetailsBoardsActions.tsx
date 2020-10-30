import React, { useState } from 'react';
import clsx from 'classnames';
import classNames from 'classnames';
import useTheme from '@material-ui/core/styles/useTheme';

import { LabelProperty, Task, TaskLabel, TaskStatus } from 'api/types';
import { Box, Chip, Emoji, Paper, SelectBox, Typography, UserAvatar, TextField, LinearProgress } from 'ui/atoms';
import { useLocale } from 'hooks/useLocale/useLocale';
import { SelectBoxItem } from 'ui/atoms/selectBox/SelectBox.types';
import {
  AddIcon,
  ComplexBuildingIcon,
  FollowUpRectangleIcon,
  HourglassIcon,
  LockRectangleIcon,
  NewConstructionIcon,
  UserRectangleIcon,
} from 'ui/atoms/icons';
import { AdvancedSearch } from 'ui/molecules/advancedSearch/AdvancedSearch';
import { AdvancedSearchItem } from 'ui/molecules/advancedSearch/AdvancedSearch.types';
import { AddCustomTaskLabelModalContainer } from '../addCustomTaskLabelModal/AddCustomTaskLabelModalContainer';
import { useCustomLabels } from 'hooks/useCustomLabels';
import { EntityType } from 'app/shared/entityType';
import { TaskLogSubmitBody } from '../taskDetailsLoggingTimeModal/TaskDetailsLoggingTimeModal.types';
import { LinkPropertyModal } from '../linkPropertyModal/LinkPropertyModal';
import { LinkOrderModal } from '../linkOrderModal/LinkOrderModal';
import { TaskDetailsLoggingTimeModal } from '../taskDetailsLoggingTimeModal/TaskDetailsLoggingTimeModal';

import { useStyles } from './TaskDetailsBoardsActions.style';
import { TaskDetailsBoardsActionsProps } from './TaskDetailsBoardsActions.types';

const convertEtaToEtaString = (mins: number) => {
  const weeks = Math.floor(mins / 60 / 24 / 7);
  const days = Math.floor((mins % (60 * 24 * 7)) / 60 / 24);
  const hours = Math.floor((mins % (60 * 24)) / 60);
  const minutes = mins % 60;

  const etaString = `${weeks > 0 ? `${weeks}w ` : ''}${days > 0 ? `${days}d ` : ''}${hours > 0 ? `${hours}h ` : ''}${
    minutes > 0 ? `${minutes}m` : ''
  }`.trim();

  return etaString === '' ? '0m' : etaString;
};

const convertEtaStringToEta = (etaString: string) => {
  const etaParts = etaString.split(' ');
  const weeks = parseInt(etaParts.find(part => part.includes('w')) || '', 10) * 60 * 24 * 7 || 0;
  const days = parseInt(etaParts.find(part => part.includes('d')) || '', 10) * 60 * 24 || 0;
  const hours = parseInt(etaParts.find(part => part.includes('h')) || '', 10) * 60 || 0;
  const minutes = parseInt(etaParts.find(part => part.includes('m')) || '', 10) || 0;

  return weeks + days + hours + minutes;
};

export const TaskDetailsBoardsActions = ({ task, user, members, onUpdateTask }: TaskDetailsBoardsActionsProps) => {
  const { formatMessage } = useLocale();
  const theme = useTheme();
  const classes = useStyles();
  const [isModalOpened, setModalOpened] = useState(false);
  const [isLogTimeModalOpened, setIsLogTimeModalOpened] = useState(false);
  const [isLinkPropertyModalOpened, setIsLinkPropertyModalOpened] = useState(false);
  const [isLinkOrderModalOpened, setIsLinkOrderModalOpened] = useState(false);
  const [isLinkRelationModalOpened, setIsLinkRelationModalOpened] = useState(false);
  const [isEditingOriginalEstimate, setIsEditingOriginalEstimate] = useState(false);
  const [originalEstimate, setOriginalEstimate] = useState(convertEtaToEtaString(task.originalEstimate || 0));
  const customLabels = useCustomLabels(task.id, [LabelProperty.Task], EntityType.Task);

  const { id, status, assignee, label } = task;

  const statusItems: SelectBoxItem[] = [
    {
      label: (
        <span className={clsx(classes.status)}>
          <Emoji>{`⏱ ${formatMessage({ id: 'tasks.todo' })}`}</Emoji>
        </span>
      ),
      value: TaskStatus.ToDo,
      color: 'blue',
    },
    {
      label: (
        <span className={clsx(classes.status)}>
          <Emoji>{`🔥 ${formatMessage({ id: 'tasks.in_progress' })}`}</Emoji>
        </span>
      ),
      value: TaskStatus.InProgress,
      color: 'yellow',
    },
    {
      label: (
        <span className={clsx(classes.status)}>
          <Emoji>{`⛔️ ${formatMessage({ id: 'tasks.blocked' })}`}</Emoji>
        </span>
      ),
      value: TaskStatus.Blocked,
      color: 'red',
    },
    {
      label: (
        <span className={clsx(classes.status)}>
          <Emoji>{`✅ ${formatMessage({ id: 'tasks.done' })}`}</Emoji>
        </span>
      ),
      value: TaskStatus.Done,
      color: 'green',
    },
  ];

  const assignees: AdvancedSearchItem[] = [user, ...members].map((member, index) => ({
    label: `${member.firstName} ${member.lastName}${index === 0 && ` (${formatMessage({ id: 'tasks.members.me' })})`}`,
    value: member.id,
    icon: <UserAvatar name={`${member.firstName} ${member.lastName}`} className={classes.avagarIcon} />,
  }));

  const labels: SelectBoxItem[] = [
    {
      label: (
        <span className={classes.label}>
          <UserRectangleIcon viewBox="0 0 16 16" />
          <Typography variant="h5" className={classes.labelText}>
            {formatMessage({ id: 'tasks.label.business' })}
          </Typography>
        </span>
      ),
      value: TaskLabel.Business,
    },
    {
      label: (
        <span className={classes.label}>
          <FollowUpRectangleIcon viewBox="0 0 16 16" />
          <Typography variant="h5" className={classes.labelText}>
            {formatMessage({ id: 'tasks.label.follow_up' })}
          </Typography>
        </span>
      ),
      value: TaskLabel.FollowUp,
    },
    {
      label: (
        <span className={classes.label}>
          <LockRectangleIcon viewBox="0 0 16 16" />
          <Typography variant="h5" className={classes.labelText}>
            {formatMessage({ id: 'tasks.label.private' })}
          </Typography>
        </span>
      ),
      value: TaskLabel.Private,
    },
    ...(customLabels[LabelProperty.Task] ?? []).map(label => ({
      label: (
        <span className={classes.label}>
          {label.icon}
          <Typography variant="h5" className={classes.labelText}>
            {formatMessage({ id: 'tasks.label.private' })}
          </Typography>
        </span>
      ),
      value: label.value,
    })),
    {
      label: (
        <span className={classes.label}>
          <span className={classes.labelIcon}>
            <AddIcon />
          </span>
          <Typography variant="h5" className={classes.labelText}>
            {formatMessage({ id: 'tasks.label.own' })}
          </Typography>
        </span>
      ),
      value: 'add_new_label',
    },
  ];

  const handleChange = (type: string, value: TaskStatus | string) => {
    onUpdateTask(id, { [type]: value } as Pick<Task, 'status' | 'assignee'>);
  };

  const handleChangeLabel = (value: string) => {
    if (value === 'add_new_label') {
      setModalOpened(true);
    } else {
      onUpdateTask(id, { label: value });
    }
  };

  const handleChangeOriginalEstimate = () => {
    if (isEditingOriginalEstimate) {
      onUpdateTask(id, { originalEstimate: convertEtaStringToEta(originalEstimate) } as Pick<
        Task,
        'status' | 'assignee' | 'originalEstimate' | 'logs'
      >);

      setIsEditingOriginalEstimate(false);
    } else {
      setIsEditingOriginalEstimate(true);
    }
  };

  const handleLogTime = async (log: TaskLogSubmitBody) => {
    onUpdateTask(id, {
      taskLog: {
        ...log,
        timeSpent: convertEtaStringToEta(log.timeSpent as string),
      },
    });
    setIsLogTimeModalOpened(false);

    return undefined;
  };

  const totalLogs =
    task.logs?.reduce((sum, log) => {
      return sum + log.timeSpent;
    }, 0) || 0;

  return (
    <>
      <Paper>
        <Box>
          <SelectBox
            value={status}
            items={statusItems}
            placeholder="tasks.details.status"
            showSelected={false}
            onChange={value => handleChange('status', value as TaskStatus)}
            align="left"
            classes={{
              input: classes.dropdown,
              inputInner: clsx(
                status === TaskStatus.ToDo
                  ? classes.backgroundBlue
                  : status === TaskStatus.InProgress
                  ? classes.backgroundYellow
                  : status === TaskStatus.Blocked
                  ? classes.backgroundRed
                  : classes.backgroundGreen,
                classes.dropdownInner,
              ),
              menu: classes.dropdownMenu,
              menuItem: classes.dropdownMenuItem,
              menuItemInner: classes.dropdownMenuItemInner,
            }}
          />
        </Box>
        <Box className={classes.marginTopOneHalf}>
          <AdvancedSearch
            title={formatMessage({ id: 'tasks.details.assignee' })}
            items={assignees}
            placeholder=""
            value={assignee}
            onChange={value => handleChange('assignee', value as TaskStatus)}
          />
        </Box>
        <Box>
          <SelectBox
            title={formatMessage({ id: 'tasks.details.label' })}
            value={label}
            items={labels}
            placeholder="tasks.details.label"
            onChange={value => handleChangeLabel(value as string)}
            align="left"
            showSelected={false}
            classes={{
              input: classes.labelDropdown,
              inputInner: classes.labelDropdownInner,
              menu: classes.dropdownMenu,
              menuItem: classes.labelDropdownMenuItem,
              menuItemInner: classes.labelDropdownMenuItemInner,
            }}
          />
        </Box>
        <Box onClick={handleChangeOriginalEstimate} className={classes.originalEstimateWrapper}>
          <Box className={clsx(classes.originalEstimate, isEditingOriginalEstimate && 'isEditing')}>
            <Typography variant="h6" color={isEditingOriginalEstimate ? 'primary' : 'initial'}>
              {formatMessage({ id: 'tasks.details.original_estimate' })}
            </Typography>
            <Box mt={0.5} display="flex" alignItems="center" className={classes.originalEstimateValueWrapper}>
              {!isEditingOriginalEstimate && (
                <Chip
                  size="small"
                  label={convertEtaToEtaString(task.originalEstimate || 0)}
                  classes={{ root: classes.originalEstimateChip, label: classes.originalEstimateLabel }}
                />
              )}
              {isEditingOriginalEstimate && (
                <TextField
                  autoFocus
                  fullWidth
                  value={originalEstimate}
                  onChange={e => setOriginalEstimate(e.target.value)}
                  className={classes.originalEstimateInput}
                />
              )}
            </Box>
          </Box>
          <Box
            className={classNames(isEditingOriginalEstimate && classes.originalEstimateBack)}
            onClick={handleChangeOriginalEstimate}
          />
        </Box>
        <Box className={classes.detailItem} onClick={() => setIsLinkOrderModalOpened(true)}>
          <Typography variant="h6">{formatMessage({ id: 'tasks.details.linked_order' })}</Typography>
          <Box mt={1}>
            <Box>
              <Typography variant="h5" className={classes.bold}>
                -
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.detailItem} onClick={() => setIsLinkPropertyModalOpened(true)}>
          <Typography variant="h6">{formatMessage({ id: 'tasks.details.linked_object' })}</Typography>
          <Box mt={1}>
            <Box display="flex" alignItems="center">
              <Box mr={1} className={classes.detailItemIcon}>
                <NewConstructionIcon color="primary" width={theme.spacing(3)} height={theme.spacing(3)} />
              </Box>
              <Typography variant="h5" className={classes.bold}>
                Living in the green
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Box mr={1} className={classes.detailItemIcon}>
                <ComplexBuildingIcon color="secondary" width={theme.spacing(3)} height={theme.spacing(3)} />
              </Box>
              <Typography variant="h5" className={classes.bold}>
                Custom name of object type
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.detailItem} onClick={() => setIsLinkRelationModalOpened(true)}>
          <Typography variant="h6">{formatMessage({ id: 'tasks.details.linked_relation' })}</Typography>
          <Box mt={1}>
            <Box>
              <Typography variant="h5" className={classes.bold}>
                -
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={classes.detailItem} onClick={() => setIsLogTimeModalOpened(true)}>
          <Typography variant="h6">{formatMessage({ id: 'tasks.details.time_reports' })}</Typography>
          <Box display="flex" alignItems="center" mt={1} mb={1}>
            <Box mr={1} className={classes.detailItemIcon}>
              <HourglassIcon width={theme.spacing(3)} height={theme.spacing(3)} />
            </Box>
            <Typography variant="h5" className={classes.bold}>
              {formatMessage({ id: 'tasks.details.total_logged' }, { time: convertEtaToEtaString(totalLogs) })}
            </Typography>
          </Box>
          <LinearProgress value={totalLogs} max={task.originalEstimate || 0} />
        </Box>
      </Paper>
      {isModalOpened && (
        <AddCustomTaskLabelModalContainer
          isOpened={isModalOpened}
          property={LabelProperty.Task}
          onClose={() => setModalOpened(false)}
        />
      )}
      {isLogTimeModalOpened && (
        <TaskDetailsLoggingTimeModal
          task={task}
          isOpen={isLogTimeModalOpened}
          onLogTime={handleLogTime}
          onClose={() => setIsLogTimeModalOpened(false)}
        />
      )}
      {isLinkPropertyModalOpened && (
        <LinkPropertyModal
          isOpened={isLinkPropertyModalOpened}
          onClose={() => setIsLinkPropertyModalOpened(false)}
          onSubmit={() => {}}
        />
      )}
      {isLinkOrderModalOpened && (
        <LinkOrderModal
          isOpened={isLinkOrderModalOpened}
          onClose={() => setIsLinkOrderModalOpened(false)}
          onSubmit={() => {}}
        />
      )}
      {isLinkRelationModalOpened && (
        <LinkOrderModal
          isOpened={isLinkRelationModalOpened}
          onClose={() => setIsLinkRelationModalOpened(false)}
          onSubmit={() => {}}
        />
      )}
    </>
  );
};
