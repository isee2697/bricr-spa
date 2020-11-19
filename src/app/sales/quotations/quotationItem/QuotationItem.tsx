import React from 'react';
import clsx from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import { DateTime } from 'luxon';

import {
  Avatar,
  Box,
  Chip,
  Emoji,
  StepConnector,
  Stepper,
  Step,
  StepLabel,
  IconButton,
  PersonChip,
  Typography,
  UserAvatar,
  Grid,
} from 'ui/atoms';
import { CheckIcon, MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';

import { QuotationItemProps } from './QuotationItem.types';
import { useStyles } from './QuotationItem.styles';

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

export const QuotationItem = (props: QuotationItemProps) => {
  const {
    checkbox,
    checked,
    quotation: { id, image, address, interest, version, partners, accountManagers, steps },
  } = props;
  const classes = useStyles(props);
  const { formatMessage } = useLocale();

  return (
    <Box className={clsx(classes.row, { [classes.rowChecked]: checked })}>
      {checkbox}
      <Box display="flex" width="100%" alignItems="flex-start">
        <Avatar variant="rounded" src={image} className={classes.image}>
          {!image && <Emoji>{'📷'}</Emoji>}
        </Avatar>
        <Box width="100%" display="flex">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Box display="flex" alignItems="center">
                <Chip
                  variant="outlined"
                  color="primary"
                  label={formatMessage({ id: `dictionaries.sales.interests.${interest}` })}
                  size="small"
                />
                <Box ml={3.5} />
                <Typography variant="h6" color="textSecondary">
                  {formatMessage({ id: 'common.version' }, { version })}
                </Typography>
                <Box ml={2} />
                <Typography variant="h6" color="textSecondary">{`QA-${id}`}</Typography>
              </Box>
              <Typography variant="h3" className={classes.fontWeightBold}>
                {address}
              </Typography>
              <Box display="flex" alignItems="flex-start" mt={2} mb={1} className={classes.stepperWrapper}>
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
              <Box mb={3.75}>
                {partners.length === 0 && <Typography variant="h6">-</Typography>}
                {partners.map((partner, partnerIndex) => (
                  <Box key={partnerIndex} mt={1}>
                    <PersonChip name={partner.name} image={partner.image} />
                  </Box>
                ))}
              </Box>
              <Box>
                <Typography variant="h6" className={classes.fontWeightMedium} color="textSecondary">
                  {formatMessage({ id: 'sales.quotations.account_managers' })}
                </Typography>
                <Box display="flex" alignItems="center">
                  {accountManagers.map((accountManager, accountManagerIndex) => (
                    <Box mr={0.5} mb={0.5} key={accountManagerIndex}>
                      <UserAvatar name={accountManager.name} variant="circle" avatar={accountManager.image} />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <IconButton size="small" variant="rounded">
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
