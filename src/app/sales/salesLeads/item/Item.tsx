import React from 'react';
import clsx from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import { DateTime } from 'luxon';

import {
  Avatar,
  Box,
  Chip,
  Emoji,
  IconButton,
  PersonChip,
  Typography,
  StepConnector,
  Stepper,
  Step,
  StepLabel,
} from 'ui/atoms';
import { AddIcon, CheckIcon, CloseIcon, HelpIcon, MailIcon, MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { useStyles } from './Item.styles';
import { SalesLeadItemProps } from './Item.types';

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

export const SalesLeadItem = (props: SalesLeadItemProps) => {
  const { salesLead, checkbox, checked } = props;
  const { formatMessage } = useLocale();
  const classes = useStyles(props);

  return (
    <Box className={clsx(classes.row, { [classes.rowChecked]: checked })}>
      {checkbox}
      <Box width="100%">
        <Box display="flex" alignItems="flex-start">
          <Avatar variant="rounded" src={salesLead.image} className={classes.image}>
            {!salesLead.image && <Emoji>{'📷'}</Emoji>}
          </Avatar>
          <Box ml={2} mr={2} width="100%">
            <Typography variant="h3" className={classes.fontWeightBold}>
              {salesLead.name}
            </Typography>
            <Box display="flex">
              <Box display="flex" alignItems="center" mr={4}>
                <HelpIcon className={classes.verticalAlignTop} />
                <Box mr={0.5} />
                <Typography variant="h5" className={classes.fontWeightMedium}>
                  {salesLead.number}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <MailIcon className={classes.verticalAlignTop} />
                <Box mr={0.5} />
                <Typography variant="h5" className={classes.fontWeightMedium}>
                  {salesLead.email}
                </Typography>
              </Box>
            </Box>
            <Box mt={1}>
              <Typography variant="h6" className={clsx(classes.fontWeightMedium, classes.gray)}>
                {formatMessage({ id: 'sales.leads.partner' })}
              </Typography>
              {!salesLead.partner && <Typography variant="h6">-</Typography>}
              {salesLead.partner && <PersonChip name={salesLead.partner.name} image={salesLead.partner.image} />}
            </Box>
            <Box mt={1}>
              <Typography variant="h6" className={clsx(classes.fontWeightMedium, classes.gray)}>
                {formatMessage({ id: 'sales.leads.interested_in' })}
              </Typography>
              <Box display="flex" flexWrap="wrap">
                {salesLead.interests.map((interest, index) => (
                  <Box mr={1.5} key={index}>
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
          </Box>
          <IconButton size="small" variant="rounded">
            <MenuIcon />
          </IconButton>
        </Box>
        <Box display="flex" alignItems="flex-start" mt={2} mb={1} className={classes.stepperWrapper}>
          <Stepper
            variant="elevation"
            alternativeLabel
            nonLinear
            connector={<StatusStepConnector />}
            className={classes.stepper}
          >
            {salesLead.steps?.map((step, index) => (
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
                          {index}
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
    </Box>
  );
};
