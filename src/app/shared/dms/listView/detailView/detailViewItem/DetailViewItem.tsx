import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { withStyles } from '@material-ui/core';
import { DateTime } from 'luxon';
import clsx from 'clsx';

import { useLocale } from 'hooks/useLocale/useLocale';
import {
  Avatar,
  Box,
  Typography,
  Emoji,
  IconButton,
  Menu,
  MenuItem,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
} from 'ui/atoms';
import { MenuIcon, EditIcon, CloseIcon, CheckIcon } from 'ui/atoms/icons';
import { Button } from 'ui/atoms/button/Button.styles';
import { DocumentRequestStep } from 'app/crmRelationsDetails/documents/documentListView/listItem/ListItem.types';
import { DocumentRequestStatus } from 'app/crmRelationsDetails/documents/Documents.types';

import { DetailViewItemProps } from './DetailViewItem.types';
import { useStyles } from './DetailViewItem.styles';

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

export const DmsDetailViewItem = ({ data }: DetailViewItemProps) => {
  const { formatMessage } = useLocale();
  const intl = useIntl();
  const classes = useStyles(data);
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const { id, name, dateCreated: modifiedAt, avatar, stepsCompleted } = data;

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

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
            {!avatar && <Emoji>{'????'}</Emoji>}
          </Avatar>
        </Box>
        <Box width="100%">
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Box flexGrow={1} flexShrink={1}>
              <Typography className={classes.date}>{modifiedAt?.toRelative({ locale: intl.locale }) || ''}</Typography>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography className={classes.title}>{name}</Typography>
                {steps[documentRequestStatuses.length - 1].status === 'active' && (
                  <Box mr={3}>
                    <Button variant="outlined" className={classes.readyForReview} size="small">
                      {formatMessage({ id: 'dms.documents.ready_for_review' })}
                    </Button>
                  </Box>
                )}
              </Box>
              <Box mt={2}>
                <Typography className={classes.subtitle}>
                  {formatMessage({ id: 'dms.documents.request_status' })}
                </Typography>
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
              <IconButton
                className="menu-icon"
                variant="rounded"
                size="small"
                selected={Boolean(menuEl)}
                onClick={onMenuClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu id={id} open={Boolean(menuEl)} onClose={onMenuClose} anchorEl={menuEl} placement="bottom-end">
                <MenuItem
                  className={classes.menuItem}
                  onClick={(event: React.MouseEvent) => {
                    event.stopPropagation();
                  }}
                >
                  <EditIcon classes={{ root: classes.menuIcon }} />
                  <Box ml={2}>
                    <Typography variant="subtitle1">
                      {formatMessage({
                        id: 'dms.documents.edit',
                      })}
                    </Typography>
                  </Box>
                </MenuItem>
              </Menu>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
