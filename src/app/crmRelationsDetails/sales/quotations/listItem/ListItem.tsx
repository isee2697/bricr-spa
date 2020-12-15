import React from 'react';
import clsx from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import { DateTime } from 'luxon';

import {
  Avatar,
  Box,
  Chip,
  Emoji,
  Grid,
  IconButton,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
  UserAvatar,
} from 'ui/atoms';
import { CheckIcon, MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { ListItemProps } from './ListItem.types';
import { useStyles } from './ListItem.styles';

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

export const ListItem = ({
  item: { id, image, version, steps, interest, address, accountManagers },
  checkbox,
  checked,
  status,
}: ListItemProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <>
      <Box className={clsx(classes.row, { [classes.rowChecked]: checked }, status)}>
        {checkbox}
        <Box width="100%" display="flex" alignItems="flex-start" className={classes.rowItem}>
          <Box mr={3}>
            <Avatar variant="square" src={image || ''} className={classes.image}>
              {(!image || image === '') && <Emoji>{'📷'}</Emoji>}
            </Avatar>
          </Box>
          <Box width="100%">
            <Grid container spacing={1}>
              <Grid item xs={8}>
                <Chip
                  variant="outlined"
                  size="small"
                  label={formatMessage({ id: `dictionaries.sales.interests.${interest}` })}
                  className={classes.chip}
                />
                <Box mt={1} />
                <Typography variant="h3" className={classes.fontWeightBold}>
                  {address}
                </Typography>
                <Box mt={2} mb={1} className={classes.stepperWrapper}>
                  <Stepper
                    variant="elevation"
                    alternativeLabel
                    nonLinear
                    connector={<StatusStepConnector />}
                    className={classes.stepper}
                  >
                    {steps?.map((step, index) => (
                      <Step className={clsx(classes.step, step.status)}>
                        <StepLabel
                          optional={
                            <>
                              <Typography variant="h6" className={classes.stepLabelOptional}>
                                {step.date?.toLocaleString(DateTime.DATE_SHORT) || '-'}
                              </Typography>
                              <Typography variant="h6" className={classes.stepLabelOptional}>
                                {step.date?.toLocaleString(DateTime.TIME_WITH_SECONDS) || '-'}
                              </Typography>
                            </>
                          }
                          className={clsx(classes.stepLabel, step.status)}
                          StepIconComponent={() => {
                            if (step.status === 'active') {
                              return (
                                <Typography variant="h5" className={clsx(classes.stepIcon, step.status)}>
                                  {index + 1}
                                </Typography>
                              );
                            } else if (step.status === 'completed') {
                              return <CheckIcon color="action" className={clsx(classes.stepIcon, step.status)} />;
                            } else {
                              return (
                                <Typography variant="h5" className={clsx(classes.stepIcon, step.status)}>
                                  {index + 1}
                                </Typography>
                              );
                            }
                          }}
                        >
                          {formatMessage({
                            id: `dictionaries.sales.step.${step.action}`,
                          })}
                        </StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box>
                  <Typography variant="h6" className={classes.fontWeightMedium} color="textSecondary">
                    {formatMessage({ id: 'crm.details.sales.quotations.quotation.version' }, { version })}
                  </Typography>
                  <Typography variant="h5" className={classes.fontWeightBold} color="textSecondary">
                    QA-{id}
                  </Typography>
                </Box>
                <Box mt={7}>
                  <Typography variant="h6" className={classes.fontWeightMedium} color="textSecondary">
                    {formatMessage({ id: 'crm.details.sales.quotations.quotation.account_managers' })}
                  </Typography>
                  <Box display="flex" alignItems="center">
                    {accountManagers.map(({ name, image }, index) => (
                      <Box mr={0.5} mb={0.5}>
                        <UserAvatar name={name} variant="circle" avatar={image} />
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <IconButton variant="rounded" size="small">
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};
