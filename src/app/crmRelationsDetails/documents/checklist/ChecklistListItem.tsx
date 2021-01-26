import React from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks';
import { Avatar, Box, Chip, Emoji, IconButton, Typography, Stepper, Step, StepLabel } from 'ui/atoms';
import { CheckIcon, CloseIcon, MenuIcon } from 'ui/atoms/icons';

import { Checklist, ChecklistStepStatus, CheclistStepType } from './Checklist.types';
import { useStyles, StatusStepConnector } from './ChecklistListItem.styles';

export const ChecklistListItem = (list: Checklist) => {
  const classes = useStyles(list);
  const { image, title, accepted, checked, steps = [] } = list;
  const { formatMessage } = useLocale();

  return (
    <Box display="flex" width="100%" alignItems="flex-start">
      <Box mr={8}>
        <Avatar variant="rounded" src={image} className={classes.image}>
          {!image && <Emoji>{'📷'}</Emoji>}
        </Avatar>
      </Box>
      <Box width="100%">
        <Typography variant="h6" color="textSecondary">
          1 hour ago
        </Typography>
        <Typography variant="h3">{title}</Typography>
        <Box mt={1} />
        <Chip
          size="small"
          variant="outlined"
          label={
            <Box display="flex" alignItems="center">
              <Typography variant="h6" color="textSecondary">
                {formatMessage({ id: 'common.accepted' })} {accepted}/{checked}{' '}
              </Typography>
              <Box ml={1} />
              {accepted === 0 ? <Emoji>{'❌'}</Emoji> : <Emoji>{'⚠️'}</Emoji>}
            </Box>
          }
        />
        <Box mt={2}>
          <Stepper
            variant="elevation"
            alternativeLabel
            nonLinear
            connector={<StatusStepConnector />}
            className={classes.stepper}
          >
            {steps.map((step, index) => (
              <Step className={clsx(classes.step, step.status)}>
                <StepLabel
                  optional={
                    <Typography variant="h6" className={classes.stepLabelOptional}>
                      {step.date?.toLocaleString(DateTime.DATE_MED) || '-'}
                    </Typography>
                  }
                  className={clsx(classes.stepLabel, step.status)}
                  StepIconComponent={() => {
                    if (step.status === ChecklistStepStatus.Rejected) {
                      return <CloseIcon color="error" className={clsx(classes.stepIcon, step.status)} />;
                    } else if (step.status === ChecklistStepStatus.Completed) {
                      return <CheckIcon color="action" className={clsx(classes.stepIcon, step.status)} />;
                    } else {
                      return (
                        <Typography variant="h5" className={clsx(classes.stepIcon, step.status)}>
                          {index}
                        </Typography>
                      );
                    }
                  }}
                >
                  {formatMessage({
                    id: `dictionaries.document_request_status.${step.step}`,
                  })}
                  {step.step === CheclistStepType.Uploaded ? ` ${step.uploadedCount}/${step.uploadedTotalCount}` : ''}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>
      <IconButton variant="rounded" size="small">
        <MenuIcon />
      </IconButton>
    </Box>
  );
};
