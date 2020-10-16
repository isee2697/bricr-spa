import React from 'react';
import { DateTime } from 'luxon';

import { DatePickerField, DropdownField, TimePickerField } from 'form/fields';
import { useLocale } from 'hooks';
import { FormModal } from 'ui/organisms';
import { Box, Grid } from 'ui/atoms';
import { TaskPriority } from 'api/types';
import { DropdownItem } from 'ui/atoms/dropdown/Dropdown.types';
import { PriorityHighIcon, PriorityLowIcon, PriorityMediumIcon } from 'ui/atoms/icons';

import { TaskDetailsUpdateBody, TaskDetailsUpdateModalProps } from './TaskDetailsUpdateModal.types';
import { useStyles } from './TaskDetailsUpdateModal.styles';

export const TaskDetailsUpdateModal = ({ isOpen, task, onUpdateTask, onClose }: TaskDetailsUpdateModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const initialValues = {
    startDate: task.startDate ? DateTime.fromISO(task.startDate) : new DateTime(),
    startTime: task.startDate ? DateTime.fromISO(task.startDate) : new DateTime(),
    deadlineDate: task.deadline ? DateTime.fromISO(task.deadline) : new DateTime(),
    deadlineTime: task.deadline ? DateTime.fromISO(task.deadline) : new DateTime(),
    priority: task.priority,
  };

  const handleUpdatetask = async ({
    startDate,
    startTime,
    deadlineDate,
    deadlineTime,
    priority,
  }: TaskDetailsUpdateBody) => {
    const { hour: startHour, minute: startMinute } = startTime;
    const { hour: deadlineHour, minute: deadlineMinute } = deadlineTime;

    onUpdateTask(task.id, {
      startDate: startDate.set({ hour: startHour, minute: startMinute }).toISO(),
      deadline: deadlineDate.set({ hour: deadlineHour, minute: deadlineMinute }).toISO(),
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
    <FormModal
      isOpened={isOpen}
      onClose={onClose}
      onSubmit={handleUpdatetask}
      title={formatMessage({ id: 'tasks.details.detailed_information' })}
      initialValues={initialValues}
    >
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <DatePickerField
            label={formatMessage({ id: 'tasks.details.detailed_information.start_date' })}
            name="startDate"
            placeholder="tasks.details.detailed_information.start_date"
          />
        </Grid>
        <Grid item xs={6}>
          <TimePickerField
            label={formatMessage({ id: 'tasks.details.detailed_information.start_time' })}
            name="startTime"
            placeholder="tasks.details.detailed_information.start_time"
          />
        </Grid>
        <Grid item xs={6}>
          <DatePickerField
            label={formatMessage({ id: 'tasks.details.detailed_information.deadline_date' })}
            name="deadlineDate"
            placeholder="tasks.details.detailed_information.deadline_date"
          />
        </Grid>
        <Grid item xs={6}>
          <TimePickerField
            label={formatMessage({ id: 'tasks.details.detailed_information.deadline_time' })}
            name="deadlineTime"
            placeholder="tasks.details.detailed_information.deadline_time"
          />
        </Grid>
        <Grid item xs={6}>
          <DropdownField
            label={formatMessage({ id: 'tasks.details.detailed_information.priority' })}
            name="priority"
            items={priorities}
            placeholder={formatMessage({ id: 'tasks.details.detailed_information.priority' })}
          />
        </Grid>
      </Grid>
    </FormModal>
  );
};
