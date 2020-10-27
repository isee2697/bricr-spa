import React from 'react';

import { useLocale } from 'hooks';
import { FormModal } from 'ui/organisms';
import { Box, Grid, Typography } from 'ui/atoms';
import { DatePickerField, GenericField } from 'form/fields';
import { HourglassIcon } from 'ui/atoms/icons';

import { TaskDetailsLoggingTimeModalProps } from './TaskDetailsLoggingTimeModal.types';

export const TaskDetailsLoggingTimeModal = ({ isOpen, onClose, onLogTime }: TaskDetailsLoggingTimeModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <FormModal
      isOpened={isOpen}
      onClose={onClose}
      onSubmit={onLogTime}
      title={formatMessage({ id: 'tasks.details.logging_time' })}
      addText={
        <Box display="flex" alignItems="center">
          <HourglassIcon />
          <Typography variant="h4">{formatMessage({ id: 'tasks.details.logging_time' })}</Typography>
        </Box>
      }
    >
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <GenericField
            label={formatMessage({ id: 'tasks.details.time_spent' })}
            name="timeSpent"
            placeholder="tasks.details.time_spent.placeholder"
          />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <DatePickerField
            label={formatMessage({ id: 'tasks.details.date_started' })}
            name="dateStarted"
            placeholder="tasks.details.date_started.placeholder"
          />
        </Grid>
        <Grid item xs={6}>
          <GenericField
            label={formatMessage({ id: 'tasks.details.notes' })}
            name="notes"
            placeholder="tasks.details.notes.placeholder"
          />
        </Grid>
      </Grid>
    </FormModal>
  );
};
