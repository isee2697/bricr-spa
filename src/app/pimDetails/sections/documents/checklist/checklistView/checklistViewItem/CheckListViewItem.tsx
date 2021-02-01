import React from 'react';
import { useIntl } from 'react-intl';
import { withStyles } from '@material-ui/core';
import { DateTime } from 'luxon';
import clsx from 'clsx';

import { useLocale } from 'hooks/useLocale/useLocale';
import { Avatar, Box, Typography, Emoji, Step, StepConnector, StepLabel, Stepper } from 'ui/atoms';
import { CloseIcon, CheckIcon } from 'ui/atoms/icons';
import { Button } from 'ui/atoms/button/Button.styles';
import { DocumentRequestStep } from 'app/crmRelationsDetails/documents/documentListView/listItem/ListItem.types';
import { DocumentRequestStatus } from 'app/crmRelationsDetails/documents/Documents.types';
import { ListOptionsMenu } from 'ui/molecules';
import { ListOptionsMenuItem } from 'ui/molecules/listOptionsMenu/menuItem/ListOptionsMenuItem';

import { CheckListViewItemProps } from './CheckListViewItem.types';
import { useStyles } from './CheckListViewItem.styles';

const StatusStepConnector = withStyles(theme => ({
  alternativeLabel: {
    left: `calc(-100% + ${theme.spacing(3)}px)`,
    right: '100%',
  },
  active: {
    '& $line': {
      background: theme.palette.green.main,
    },
  },
  completed: {
    '& $line': {
      background: theme.palette.green.main,
    },
  },
  line: {
    background: theme.palette.gray.light,
    borderTopWidth: 0,
    minHeight: 2,
    height: 2,
  },
}))(StepConnector);

export const CheckListViewItem = ({ data }: CheckListViewItemProps) => {
  const { formatMessage } = useLocale();
  const intl = useIntl();
  const classes = useStyles(data);

  const { id, name, dateCreated: modifiedAt, avatar, stepsCompleted } = data;

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
    <Box display="flex" width="100%" flexDirection="column">
      <Box display="flex" width="100%">
        <Box position="relative">
          <Avatar variant="rounded" src={avatar} className={classes.image}>
            {!avatar && <Emoji>{'📷'}</Emoji>}
          </Avatar>
        </Box>
        <Box width="100%">
          <Box display="flex" justifyContent="space-between">
            <Box flexGrow={1} flexShrink={1}>
              <Typography className={classes.date}>{modifiedAt?.toRelative({ locale: intl.locale }) || ''}</Typography>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography className={classes.title}>{name}</Typography>
              </Box>
              <Box mt={1}>
                <Button variant="outlined" className={classes.statusBar} size="small">
                  {formatMessage({ id: 'checklist.status.accepted' })} 2/4
                  <CloseIcon color="secondary" className={classes.statusIcon} />
                </Button>
              </Box>
              <Box mt={2} width="100%">
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
            <div>
              <ListOptionsMenu id={id} onDeleteClick={() => {}} onEditClick={() => {}}>
                <ListOptionsMenuItem
                  title={formatMessage({
                    id: 'checklist_view.invite',
                  })}
                />
                <ListOptionsMenuItem
                  title={formatMessage({
                    id: 'checklist_view.reminder',
                  })}
                />
                <ListOptionsMenuItem
                  title={formatMessage({
                    id: 'checklist_view.inactive',
                  })}
                />
              </ListOptionsMenu>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
