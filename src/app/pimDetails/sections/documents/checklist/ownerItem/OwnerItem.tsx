import React, { ReactElement, useState } from 'react';
import clsx from 'classnames';
import { withStyles } from '@material-ui/core';
import { DateTime } from 'luxon';

import {
  Box,
  Chip,
  IconButton,
  Typography,
  Grid,
  Step,
  StepConnector,
  Stepper,
  StepLabel,
  Menu,
  MenuItem,
} from 'ui/atoms';
import { CheckList } from '../CheckList.types';
import { useLocale } from 'hooks';
import { CheckIcon, ClockIcon, CloseIcon, DeleteIcon, MenuIcon } from 'ui/atoms/icons';

import { useStyles } from './OwnerItem.styles';

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

export const OwnerItem = ({
  item: { id: checklistId, type, steps, condition },
  checkbox,
  checked,
  onClick,
}: {
  item: CheckList;
  checkbox: ReactElement;
  checked: boolean;
  onClick: VoidFunction;
}) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const actions = [
    {
      value: 'invite',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'upload',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'accept',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'reject',
      icon: <ClockIcon />,
      onClick: () => {},
    },
    {
      value: 'edit',
      icon: <ClockIcon />,
      onClick: () => {
        onClick();
      },
    },
    {
      value: 'delete',
      icon: <DeleteIcon color="inherit" />,
      onClick: () => {},
      color: 'red',
    },
  ];

  return (
    <>
      <Box className={clsx(classes.row, { [classes.rowChecked]: checked })}>
        <Box width="100%" display="flex" justifyContent="space-between" alignItems="center">
          {checkbox}
          <Grid container spacing={1} alignItems="center">
            <Grid item xs={5}>
              <Typography variant="h5">{formatMessage({ id: `dictionaries.type_of_document.${type}` })}</Typography>
            </Grid>
            <Grid item xs={5}>
              <Stepper
                variant="elevation"
                alternativeLabel
                nonLinear
                connector={<StatusStepConnector />}
                className={classes.stepper}
              >
                {steps.map((step, stepIndex) => (
                  <Step key={stepIndex} className={clsx(classes.step, step.status)}>
                    <StepLabel
                      className={clsx(classes.stepLabel, step.status)}
                      StepIconComponent={() => {
                        if (step.status === 'rejected') {
                          return <CloseIcon color="error" className={clsx(classes.stepIcon, step.status)} />;
                        } else if (step.status === 'completed') {
                          return <CheckIcon color="error" className={clsx(classes.stepIcon, step.status)} />;
                        } else {
                          return <CloseIcon color="error" className={clsx(classes.stepIcon, step.status)} />;
                        }
                      }}
                    >
                      {step.status === 'completed' && step.date ? step.date.toLocaleString(DateTime.DATE_MED) : ''}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
            <Grid item xs={1}>
              <Chip
                size="small"
                variant="outlined"
                label={formatMessage({
                  id: `dictionaries.checklist_condition.${condition}`,
                })}
                className={classes.gray}
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton size="small" variant="roundedContained" onClick={onMenuClick}>
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Menu
        id={`checklist-owner-row-menu-${checklistId}`}
        open={Boolean(menuEl)}
        onClose={onMenuClose}
        anchorEl={menuEl}
        placement="bottom-end"
      >
        {actions.map((action, index) => (
          <MenuItem
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
              setMenuEl(null);
              action.onClick();
            }}
            className={clsx(classes.menuItem, action.color)}
          >
            {action.icon}
            <Box ml={2} display="flex" width="100%" justifyContent="space-between" alignItems="center">
              <Typography variant="subtitle1">
                {formatMessage({
                  id: `calendar.action.${action.value}`,
                })}
              </Typography>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
