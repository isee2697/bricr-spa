import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks';
import {
  Box,
  Button,
  DatePicker,
  DialogActions,
  DialogContent,
  Grid,
  InputLabel,
  SelectBox,
  TimePicker,
} from 'ui/atoms';
import { TaskPriority } from 'api/types';
import { DropdownItem } from 'ui/atoms/dropdown/Dropdown.types';
import { AddIcon, PriorityHighIcon, PriorityLowIcon, PriorityMediumIcon } from 'ui/atoms/icons';
import { CancelButton, Modal } from 'ui/molecules';

import { TaskDetailsUpdateModalProps } from './TaskDetailsUpdateModal.types';
import { useStyles } from './TaskDetailsUpdateModal.styles';

export const TaskDetailsUpdateModal = ({ isOpen, task, onUpdateTask, onClose }: TaskDetailsUpdateModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [startDate, setStartDate] = useState(task.startDate && DateTime.fromISO(task.startDate));
  const [startTime, setStartTime] = useState(task.startDate && DateTime.fromISO(task.startDate));
  const [deadlineDate, setDeadlineDate] = useState(task.deadline && DateTime.fromISO(task.deadline));
  const [deadlineTime, setDeadlineTime] = useState(task.deadline && DateTime.fromISO(task.deadline));
  const [priority, setPriority] = useState(task.priority);

  const handleUpdatetask = () => {
    onUpdateTask(task.id, {
      startDate:
        startDate &&
        startDate.set({ hour: startTime ? startTime.hour : 0, minute: startTime ? startTime.minute : 0 }).toISO(),
      deadline:
        deadlineDate &&
        deadlineDate
          .set({ hour: deadlineTime ? deadlineTime.hour : 0, minute: deadlineTime ? deadlineTime.minute : 0 })
          .toISO(),
      priority,
    });

    onClose();

    return undefined;
  };

  const priorities: DropdownItem[] = Object.keys(TaskPriority).map(priority => {
    let icon: React.ReactElement;

    switch (priority) {
      case TaskPriority.High:
        icon = <PriorityHighIcon className={classes.priorityIcon} />;
        break;
      case TaskPriority.Medium:
        icon = <PriorityMediumIcon className={classes.priorityIcon} />;
        break;
      case TaskPriority.Low:
        icon = <PriorityLowIcon className={classes.priorityIcon} />;
        break;
      default:
        icon = <PriorityHighIcon className={classes.priorityIcon} />;
        break;
    }

    return {
      label: (
        <Box display="flex" alignItems="center">
          {icon} {priority}
        </Box>
      ),
      value: priority,
    };
  });

  return (
    <Modal
      fullWidth
      isOpened={isOpen}
      onClose={onClose}
      title={formatMessage({ id: 'tasks.details.detailed_information' })}
      className={classes.root}
    >
      <DialogContent>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <DatePicker
              label={formatMessage({ id: 'tasks.details.detailed_information.start_date' })}
              placeholder="tasks.details.detailed_information.start_date"
              onChange={date => setStartDate(date)}
              value={startDate}
            />
          </Grid>
          <Grid item xs={6}>
            <TimePicker
              label={formatMessage({ id: 'tasks.details.detailed_information.start_time' })}
              placeholder="tasks.details.detailed_information.start_time"
              onChange={date => setStartTime(date)}
              value={startTime}
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              label={formatMessage({ id: 'tasks.details.detailed_information.deadline_date' })}
              placeholder="tasks.details.detailed_information.deadline_date"
              onChange={date => setDeadlineDate(date)}
              value={deadlineDate}
            />
          </Grid>
          <Grid item xs={6}>
            <TimePicker
              label={formatMessage({ id: 'tasks.details.detailed_information.deadline_time' })}
              placeholder="tasks.details.detailed_information.deadline_time"
              onChange={date => setDeadlineTime(date)}
              value={deadlineTime}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel shrink variant="outlined" color="primary" htmlFor="priority">
              {formatMessage({ id: 'tasks.details.detailed_information.priority' })}
            </InputLabel>
            <SelectBox
              value={priority}
              onChange={value => setPriority(value as TaskPriority)}
              placeholder={formatMessage({ id: 'tasks.details.detailed_information.priority' })}
              items={priorities}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions className={classes.actions}>
        <CancelButton variant="outlined" size="large" onClick={onClose}>
          {formatMessage({ id: 'common.cancel' })}
        </CancelButton>
        <Button
          startIcon={<AddIcon color="inherit" />}
          size="large"
          color="primary"
          variant="contained"
          onClick={handleUpdatetask}
        >
          {formatMessage({ id: 'common.add' })}
        </Button>
      </DialogActions>
    </Modal>
  );
};
