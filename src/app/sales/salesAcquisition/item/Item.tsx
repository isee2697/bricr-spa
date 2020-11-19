import { withStyles } from '@material-ui/core';
import clsx from 'classnames';
import React from 'react';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';

import { useLocale } from 'hooks';
import {
  Avatar,
  Box,
  Chip,
  Emoji,
  Grid,
  IconButton,
  PersonChip,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
  UserAvatar,
} from 'ui/atoms';
import { AddIcon, CheckIcon, CloseIcon, HelpIcon, MailIcon, MenuIcon } from 'ui/atoms/icons';
import { AppRoute } from 'routing/AppRoute.enum';

import { SalesAcquisitionItemProps } from './Item.types';
import { useStyles } from './Item.styles';

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

export const SalesAcquisitionItem = (props: SalesAcquisitionItemProps) => {
  const { salesAcquisition, checkbox, checked } = props;
  const { formatMessage } = useLocale();
  const classes = useStyles(props);
  const { push } = useHistory();

  return (
    <Box className={clsx(classes.row, !!salesAcquisition.isNewlyAdded && 'new', { [classes.rowChecked]: checked })}>
      {checkbox}
      <Box display="flex" width="100%" alignItems="flex-start">
        <Box
          className={classes.rowContent}
          width="100%"
          mt={2}
          onClick={() => push(AppRoute.salesDetails.replace(':id', salesAcquisition.id))}
        >
          <Box width="100%" display="flex" alignItems="flex-start">
            <Box width="100%" display="flex" alignItems="flex-start">
              <Box mr={2} width="100%">
                <Grid container>
                  <Grid item xs={7}>
                    <Box display="flex">
                      <Avatar variant="rounded" src={salesAcquisition.image} className={classes.image}>
                        {!salesAcquisition.image && <Emoji>{'📷'}</Emoji>}
                      </Avatar>
                      <Box>
                        <Typography variant="h3" className={classes.fontWeightBold}>
                          {salesAcquisition.name}
                        </Typography>
                        <Box display="flex" alignItems="center" mr={4}>
                          <HelpIcon className={classes.verticalAlignTop} />
                          <Box mr={0.5} />
                          <Typography variant="h5" className={classes.fontWeightMedium}>
                            {salesAcquisition.number}
                          </Typography>
                        </Box>
                        <Box display="flex" alignItems="center">
                          <MailIcon className={classes.verticalAlignTop} />
                          <Box mr={0.5} />
                          <Typography variant="h5" className={classes.fontWeightMedium}>
                            {salesAcquisition.email}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box mt={2}>
                      <Typography variant="h6" className={clsx(classes.fontWeightMedium, classes.gray)}>
                        {formatMessage({ id: 'sales.acquisition.interested_in' })}
                      </Typography>
                      <Box display="flex" flexWrap="wrap">
                        {salesAcquisition.interests.map((interest, index) => (
                          <Box mr={1.5} mt={0.5} key={index}>
                            <Chip
                              variant="outlined"
                              color="primary"
                              label={formatMessage({ id: `dictionaries.sales.interests.${interest}` })}
                              size="small"
                            />
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    <Box mt={0.5}>
                      <Typography variant="h5" className={classes.fontWeightBold}>
                        {salesAcquisition.address}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={5}>
                    <Box>
                      <Typography variant="h6" className={clsx(classes.fontWeightMedium, classes.gray)}>
                        {formatMessage({ id: 'sales.acquisition.partner' })}
                      </Typography>
                      {!salesAcquisition.partner && <Typography variant="h6">-</Typography>}
                      {salesAcquisition.partner && (
                        <PersonChip name={salesAcquisition.partner.name} image={salesAcquisition.partner.image || ''} />
                      )}
                    </Box>
                    <Box mt={5.5}>
                      <Typography variant="h6" className={clsx(classes.fontWeightMedium, classes.gray)}>
                        {formatMessage({ id: 'sales.acquisition.account_managers' })}
                      </Typography>
                      <Box display="flex" alignItems="center">
                        {salesAcquisition.accountManagers.map((accountManager, index) => (
                          <Box mr={0.5} mb={0.5}>
                            <UserAvatar name={accountManager.name} variant="circle" avatar={accountManager.image} />
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
          <Box display="flex" alignItems="flex-start" mt={2} mb={1} className={classes.stepperWrapper}>
            <Stepper
              variant="elevation"
              alternativeLabel
              nonLinear
              connector={<StatusStepConnector />}
              className={classes.stepper}
            >
              {salesAcquisition.steps?.map((step, index) => (
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
                      if (step.status === 'rejected') {
                        return <CloseIcon color="error" className={clsx(classes.stepIcon, step.status)} />;
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
              <Step className={clsx(classes.step)}>
                <StepLabel
                  className={clsx(classes.stepLabel)}
                  StepIconComponent={() => (
                    <IconButton className={classes.btnAdd} color="primary" size="small" variant="circle">
                      <AddIcon />
                    </IconButton>
                  )}
                />
              </Step>
            </Stepper>
            <Box className={classes.grayConnector} />
          </Box>
        </Box>
        <IconButton size="small" variant="rounded">
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
