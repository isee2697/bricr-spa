import React from 'react';

import { useLocale } from 'hooks';
import { FormModal } from 'ui/organisms';
import { Box, Emoji, Grid, LinearProgress, Typography } from 'ui/atoms';
import { DatePickerField, GenericField } from 'form/fields';
import { HourglassIcon } from 'ui/atoms/icons';

import { TaskDetailsLoggingTimeModalProps } from './TaskDetailsLoggingTimeModal.types';
import { useStyles } from './TaskDetailsLoggingTimeModal.styles';

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

export const TaskDetailsLoggingTimeModal = ({ task, isOpen, onClose, onLogTime }: TaskDetailsLoggingTimeModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const totalLogs =
    task.logs?.reduce((sum, log) => {
      return sum + log.timeSpent;
    }, 0) || 0;

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
        <Grid item xs={6}>
          <Box display="flex" mt={3.5}>
            <Box mr={2}>
              <Emoji className={classes.emoji}>{'😎'}</Emoji>
            </Box>
            <Box>
              <Box mb={1.5}>
                <Typography variant="h2">
                  {formatMessage({ id: 'tasks.details.total_logged' }, { time: convertEtaToEtaString(totalLogs) })}
                </Typography>
              </Box>
              <LinearProgress classes={{ root: classes.progress }} value={totalLogs} max={task.originalEstimate || 0} />
            </Box>
          </Box>
        </Grid>
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
