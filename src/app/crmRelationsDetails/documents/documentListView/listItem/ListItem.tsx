import React from 'react';
import clsx from 'classnames';
import { DateTime } from 'luxon';

import { useLocale } from 'hooks';
import { Avatar, Box, Emoji, IconButton, Step, StepLabel, Stepper, Typography } from 'ui/atoms';
import { CheckIcon, CloseIcon, MenuIcon } from 'ui/atoms/icons';
import { DocumentRequestStatus } from '../../Documents.types';

import { DocumentListItemProps, DocumentRequestStep } from './ListItem.types';
import { StatusStepConnector, useStyles } from './ListItem.styles';

export const DocumentListItem = ({ rowIndex, checkbox, checked, item }: DocumentListItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  const { uri, name, stepsCompleted } = item;

  const documentRequestStatuses = [
    DocumentRequestStatus.Request,
    DocumentRequestStatus.UserNotified,
    DocumentRequestStatus.Uploaded,
    DocumentRequestStatus.Accepted,
  ];

  const steps: DocumentRequestStep[] = documentRequestStatuses.map((status, index) => {
    if (stepsCompleted.length > index) {
      const stepStatus =
        stepsCompleted.length === index + 1
          ? stepsCompleted[index].status === DocumentRequestStatus.RequestRejected
            ? 'rejected'
            : 'active'
          : 'completed';

      return {
        status: stepStatus,
        step: stepsCompleted[index].status,
        date: stepsCompleted[index].date,
      };
    } else {
      return {
        status: 'inactive',
        step: status,
      };
    }
  });

  return (
    <Box className={clsx(classes.row, { [classes.rowChecked]: checked })}>
      <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
        {checkbox}
        <Typography variant="h4" className={classes.rowIndex}>
          {rowIndex + 1}
        </Typography>
      </Box>
      <Box className={classes.rowItem}>
        <Box display="flex">
          <Box display="flex" flexDirection="column" width="100%">
            <Box display="flex" width="100%">
              <Box>
                <Avatar variant="rounded" src={uri} className={classes.image}>
                  {!uri && <Emoji>{'📷'}</Emoji>}
                </Avatar>
              </Box>
              <Box width="100%">
                <Box display="flex" justifyContent="space-between" mb={2}>
                  <Box flexGrow={1} flexShrink={1}>
                    <Typography variant="h6" className={classes.createdTime}>
                      {formatMessage({ id: 'crm.details.documents..hours_ago' }, { before: 1 })}
                    </Typography>
                    <Typography variant="h3" className={classes.fontWeightMedium}>
                      {name}
                    </Typography>
                    <Box mt={2}>
                      <Typography variant="h5">
                        {formatMessage({ id: 'crm.details.documents.request_status' })}
                      </Typography>
                    </Box>
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
                                if (step.status === 'rejected') {
                                  return <CloseIcon color="error" className={clsx(classes.stepIcon, step.status)} />;
                                } else if (step.status === 'completed') {
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
                            </StepLabel>
                          </Step>
                        ))}
                      </Stepper>
                    </Box>
                  </Box>
                  <Box>
                    <IconButton className="menu-icon" variant="rounded" size="small" onClick={() => {}}>
                      <MenuIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
