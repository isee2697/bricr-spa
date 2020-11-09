import React, { useState } from 'react';
import clsx from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import { DateTime } from 'luxon';
import { useHistory } from 'react-router-dom';

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
  Menu,
  MenuItem,
  Checkbox,
} from 'ui/atoms';
import { AddIcon, CheckIcon, CloseIcon, EditIcon, HelpIcon, MailIcon, MenuIcon } from 'ui/atoms/icons';
import { useLocale } from 'hooks';
import { AppRoute } from 'routing/AppRoute.enum';

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
  const { id, isNewlyAdded, steps, interests, partner, number, image, email, name } = salesLead;
  const { formatMessage } = useLocale();
  const classes = useStyles(props);
  const { push } = useHistory();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const onMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setMenuEl(menuEl ? null : event.currentTarget);
  };

  const onMenuClose = () => {
    setMenuEl(null);
  };

  const menuItems = [
    {
      icon: <EditIcon classes={{ root: classes.menuIcon }} />,
      title: formatMessage({
        id: 'sales.leads.set_to_acquisition',
      }),
      onClick: () => {},
      selected: false,
      color: 'default',
    },
    {
      icon: <EditIcon classes={{ root: classes.menuIcon }} />,
      title: formatMessage({
        id: 'sales.leads.set_to_quotation',
      }),
      onClick: () => {},
      selected: false,
      color: 'default',
    },
    {
      icon: <EditIcon classes={{ root: classes.menuIcon }} />,
      title: formatMessage({
        id: 'sales.leads.set_to_order',
      }),
      onClick: () => {},
      selected: false,
      color: 'default',
    },
    {
      icon: <EditIcon classes={{ root: classes.menuIcon }} />,
      title: formatMessage({
        id: 'sales.leads.set_to_dropouts',
      }),
      onClick: () => {},
      selected: false,
      color: 'default',
    },
    {
      icon: <EditIcon classes={{ root: classes.menuIcon }} />,
      title: formatMessage({
        id: 'sales.leads.inactive',
      }),
      onClick: () => {},
      selected: true,
      color: 'default',
    },
    {
      icon: <EditIcon classes={{ root: classes.menuIcon }} />,
      title: formatMessage({
        id: 'sales.leads.delete',
      }),
      onClick: () => {},
      color: 'error',
    },
  ];

  return (
    <Box className={clsx(classes.row, !!isNewlyAdded && 'new', { [classes.rowChecked]: checked })}>
      {checkbox}
      <Box
        className={classes.rowContent}
        width="100%"
        mt={2}
        onClick={() => push(AppRoute.crmRelationsDetails.replace(':id', id))}
      >
        <Box display="flex" alignItems="flex-start">
          <Avatar variant="rounded" src={image} className={classes.image}>
            {!image && <Emoji>{'📷'}</Emoji>}
          </Avatar>
          <Box ml={2} mr={2} width="100%">
            <Typography variant="h3" className={classes.fontWeightBold}>
              {name}
            </Typography>
            <Box display="flex">
              <Box display="flex" alignItems="center" mr={4}>
                <HelpIcon className={classes.verticalAlignTop} />
                <Box mr={0.5} />
                <Typography variant="h5" className={classes.fontWeightMedium}>
                  {number}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <MailIcon className={classes.verticalAlignTop} />
                <Box mr={0.5} />
                <Typography variant="h5" className={classes.fontWeightMedium}>
                  {email}
                </Typography>
              </Box>
            </Box>
            <Box mt={1}>
              <Typography variant="h6" className={clsx(classes.fontWeightMedium, classes.gray)}>
                {formatMessage({ id: 'sales.leads.partner' })}
              </Typography>
              {!partner && <Typography variant="h6">-</Typography>}
              {partner && <PersonChip name={partner.name} image={partner.image || ''} />}
            </Box>
            <Box mt={1}>
              <Typography variant="h6" className={clsx(classes.fontWeightMedium, classes.gray)}>
                {formatMessage({ id: 'sales.leads.interested_in' })}
              </Typography>
              <Box display="flex" flexWrap="wrap">
                {interests.map((interest, index) => (
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
        </Box>
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
      <IconButton size="small" variant="rounded" selected={Boolean(menuEl)} onClick={onMenuClick}>
        <MenuIcon />
      </IconButton>
      <Menu id={id} open={Boolean(menuEl)} onClose={onMenuClose} anchorEl={menuEl} placement="bottom-end">
        {menuItems.map((menuItem, index) => (
          <MenuItem
            className={classes.menuItem}
            onClick={(event: React.MouseEvent) => {
              event.stopPropagation();
              menuItem.onClick();
            }}
          >
            <Box width="100%" display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center">
                {menuItem.icon}
                <Box ml={2}>
                  <Typography variant="subtitle1">{menuItem.title}</Typography>
                </Box>
              </Box>
              {menuItem.selected && <Checkbox checked color="primary" classes={{ root: classes.noPadding }} />}
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
